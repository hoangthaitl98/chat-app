import { SendOutlined } from "@ant-design/icons/lib/icons";
import { Button, Input } from "antd";
import { BsEmojiSmile } from "react-icons/bs";
import "./Conversation.sass";

const Conversation = ({ room }) => {
  return (
    <div className="conversation">
      <div className="top-bar">
        <div>
          <h3>{room?.name}</h3>
        </div>
      </div>
      <div className="message-container"></div>
      <div className="bottom-bar">
        <div className="input-text">
          <Input.TextArea
            prefix={<BsEmojiSmile />}
            className="text-area"
            rows={1}
            autoSize={{ minRows: 1, maxRows: 3 }}
            bordered={true}
            placeholder="Type here"
          />
          <Button className="send-btn">
            Send <SendOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
