import { useAppContext } from "../../context/AppContext";
import "../../css/ImgList.css";

const ThingList = () => {
  const { thingRepo } = useAppContext();

  return (
    <div className="list">
      {thingRepo.map((img) => (
        <div key={img.id} className="sort">
          <div className="blank">
            <img
              src={img.preview}
              alt={img.name}
              style={{ width: "70px", height: "70px", objectFit: "cover" }}
            />
          </div>
          <div className="filename">{img.name}</div>
          <div className="score">{img.score}</div>
          <div className="blank">더미</div>
        </div>
      ))}
    </div>
  );
};

export default ThingList;
