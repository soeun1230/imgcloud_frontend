//src\repo\MainRepo.js
import { useAppContext } from "../context/AppContext";

const MainRepo = () => {
  const { user } = useAppContext();

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h3>로그인 성공!!</h3>
      <p>Email: {user.email}</p>
      <p>Nickname: {user.nickname}</p>
      <p>
        Profile : <img src={user.picture} style={{ width: "100px" }}></img>
      </p>
    </div>
  );
};

export default MainRepo;
