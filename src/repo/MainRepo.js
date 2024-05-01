//src\repo\MainRepo.js

import PeopleRepo from "./PeopleRepo";
import ThingRepo from "./ThingRepo";
import Header from "./header/Header";

const MainRepo = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <PeopleRepo />
        <ThingRepo />
      </div>
    </>
  );
};

export default MainRepo;
