import React from "react";
import "./chat.css";
import LeftSidebar from "../../components/Leftsidebar/Leftsidebar";
import ChatBox from "../../components/Chatbox/Chatbox";
import RightSidebar from "../../components/Rightsidebar/Rightsidebar";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>
    </div>
  );
};
export default Chat;
