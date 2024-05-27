import PeopleList from "./header/PeopleList";
import RepoNavi from "./header/RepoNavi";
import Sort from "./header/Sort";

const PeopleRepo = () => {
  const style = {
    width: "50%",
    height: "95vh",
    padding: "15px 0px",
    boxSizing: "border-box",
    borderLeft: "1px solid #d9d9d9",
  };

  return (
    <div style={style}>
      <RepoNavi repoName="인물" repoType="people" />
      <Sort />
      <PeopleList />
    </div>
  );
};

export default PeopleRepo;
