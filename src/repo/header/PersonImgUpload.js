import React, { useRef } from "react";
import axios from "axios";
import { useAppContext } from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const PersonImgUpload = React.forwardRef((props, ref) => {
  const fileInputRef = useRef(null);
  const { setPeopleRepo } = useAppContext();

  React.useImperativeHandle(ref, () => ({
    triggerFileInput: () => {
      fileInputRef.current.click();
    },
  }));

  const handleImgChange = async (event) => {
    const files = event.target.files; // 파일 입력 창에서 선택된 파일들을 가져옴

    if (!files.length) {
      return;
    }

    const formData = new FormData();

    const newImages = Array.from(files).map((file) => ({
      id: uuidv4(),
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      score: null,
    }));

    setPeopleRepo((prev) => [...prev, ...newImages]);

    Array.from(files).forEach((file) => {
      formData.append("image", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:8080/calculate/brisque/faces",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const scores = response.data;

      setPeopleRepo((prev) =>
        prev.map((img) => {
          const scoreIndex = newImages.findIndex(
            (newImg) => newImg.id === img.id
          );
          return scoreIndex !== -1
            ? { ...img, score: scores[scoreIndex] }
            : img;
        })
      );
    } catch (error) {
      console.error("Brisque점수 계산 실패:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*" // 이미지 파일만 허용
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImgChange}
        width={"0.1px"}
      />
    </div>
  );
});

export default PersonImgUpload;
