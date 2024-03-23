import "./Home.sass";
import Room from "./components/Room";
import Conversation from "./components/Conversation";
import { useEffect, useState } from "react";
import { getRoomList } from "../../api/room";

const Home = () => {
  const [roomList, setRoomList] = useState([]);
  const [roomSelected, setRoomSelected] = useState();

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    try {
      const res = await getRoomList();
      setRoomList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-page">
      <div className="left-side">
        <div className="panel">
          <div className="top-bar"></div>
          <div className="list-room">
            {roomList?.map((room) => (
              <div key={room._id} onClick={() => setRoomSelected(room)}>
                <Room room={room} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-side">
        <Conversation room={roomSelected} />
      </div>
    </div>
  );
};

export default Home;
