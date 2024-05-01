import RepoNavi from "./header/RepoNavi";
import Sort from "./header/Sort";

const ThingRepo = () => {
  const style = {
    width: "50%",
    height: "95vh",
    padding: "15px 0px",
    boxSizing: "border-box",
    borderLeft: "1px solid #d9d9d9",
  };

  return (
    <div style={style}>
      <RepoNavi repoName="풍경 및 사물" />
      <Sort />
    </div>
  );
};

export default ThingRepo;
