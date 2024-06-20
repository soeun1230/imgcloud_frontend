import React, { useRef, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Modal from "react-modal";
import "../../css/PersonImgUpload.css";

Modal.setAppElement("#root");

const PersonImgUpload = React.forwardRef(({ repoType }, ref) => {
  const fileInputRef = useRef(null);
  const cropperRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(""); // 원래 파일명 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { peopleRepo, setPeopleRepo } = useAppContext();

  React.useImperativeHandle(ref, () => ({
    triggerFileInput: () => {
      fileInputRef.current.click();
    },
  }));

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(imageUrl);
      setSelectedFileName(file.name); // 원래 파일명 저장
      setIsModalOpen(true); // 파일이 선택되면 모달 열기
    }
  };

  const handleCropComplete = async () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      const cropData = cropper.getData();
      const fileInput = fileInputRef.current.files[0];
      const fileType = fileInput.name.split(".").pop(); // 파일 확장자 추출 (jpg, png 등)

      const formData = new FormData();
      formData.append("image", fileInput);
      formData.append("cropData", JSON.stringify(cropData));
      formData.append("fileType", fileType); // 파일 확장자 전송

      const newImage = {
        id: uuidv4(),
        file: fileInput,
        preview: selectedFile,
        name: selectedFileName,
        score: null,
      };

      setPeopleRepo((prev) => [...prev, newImage]);

      try {
        const response = await axios.post(
          "http://localhost:8080/calculate/personBrisque",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const scores = response.data;

        setPeopleRepo((prev) =>
          prev.map((img) =>
            img.id === newImage.id ? { ...img, score: scores[0] } : img
          )
        );
      } catch (error) {
        console.error("Brisque score calculation failed:", error);
      } finally {
        setIsModalOpen(false); // 업로드 완료 후 모달 닫기
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {selectedFile && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Image Crop Modal"
        >
          <Cropper
            src={selectedFile}
            style={{ height: 400, width: "100%" }}
            initialAspectRatio={1}
            guides={false}
            ref={cropperRef}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
          />
          <button onClick={handleCropComplete}>Upload</button>
        </Modal>
      )}
    </div>
  );
});

export default PersonImgUpload;
