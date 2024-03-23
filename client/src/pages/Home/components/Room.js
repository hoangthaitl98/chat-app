import "./Room.sass";

const Room = ({ room }) => {
  return (
    <div className="room">
      <div className="room-info">
        <div className="room-title">{room.name}</div>
        <div className="room-text">{room.lastMessage}</div>
      </div>
    </div>
  );
};

export default Room;
