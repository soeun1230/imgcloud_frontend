import "../../css/RepoNavi.css";
import React, { useRef } from "react";
import ImgUpload from "./ImgUpload";
import PersonImgUpload from "./PersonImgUpload";

const RepoNavi = ({ repoName, repoType }) => {
  const imgUploadRef = useRef(null);

  const handleUploadClick = () => {
    imgUploadRef.current.triggerFileInput();
  };

  return (
    <div className="RepoNavi">
      <div className="RepoName">{repoName}</div>
      <div className="buttonList">
        {repoType === "thing" ? (
          <ImgUpload ref={imgUploadRef} repoType={repoType} />
        ) : (
          <PersonImgUpload ref={imgUploadRef} />
        )}
        <div className="button" onClick={handleUploadClick}>
          <img src="img/upload.png" alt="Upload" />
          <div>사진 올리기</div>
        </div>
        <div className="button">
          <img src="img/download.png" alt="Download" />
          <div>사진 내려받기</div>
        </div>
        <div className="button">
          <img src="img/zip.png" alt="Zip" />
          <div>사진 압축하기</div>
        </div>
        <div className="button">
          <img src="img/delete.png" alt="Delete" />
          <div>사진 삭제하기</div>
        </div>
      </div>
    </div>
  );
};

export default RepoNavi;
