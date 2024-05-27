import RepoNavi from "./header/RepoNavi";
import Sort from "./header/Sort";
import ThingList from "./header/ThingList";

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
      <RepoNavi repoName="풍경 및 사물" repoType="thing" />
      <Sort />
      <ThingList />
    </div>
  );
};

export default ThingRepo;
