import "../../css/RepoNavi.css";

// 나중에 .png .svg 파일로 바꾸기
const RepoNavi = ({ repoName }) => {
  return (
    <div className="RepoNavi">
      <div className="RepoName">{repoName}</div>
      <div className="buttonList">
        <div className="button">
          <img src="img/upload.png" />
          <div>사진 올리기</div>
        </div>
        <div className="button">
          <img src="img/download.png" />
          <div>사진 내려받기</div>
        </div>
        <div className="button">
          <img src="img/zip.png" />
          <div>사진 압축하기</div>
        </div>
        <div className="button">
          <img src="img/delete.png" />
          <div>사진 삭제하기</div>
        </div>
      </div>
    </div>
  );
};

export default RepoNavi;
