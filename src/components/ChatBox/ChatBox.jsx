import React from "react";
import "./chatbox.css";
import assets from "../../assets/assets";
const ChatBox = () => {
  return (
    <div className="chat_box">
      <div className="chat_user">
        <img src={assets.profile_img} alt="" />
        <p>
          Richard Sanford <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>

      <div className="chat_msg">
        <div className="s_msg">
          <p className="msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            !...
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30PM</p>
          </div>
        </div>
        <div className="s_msg">
          <img className="msg_img" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30PM</p>
          </div>
        </div>
        <div className="r_msg">
          <p className="msg">
            Lorem ipsum dolor consectetur adipisicing elit. Impedit
            consectetur!...
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30PM</p>
          </div>
        </div>
      </div>

      <div className="chat_input">
        <input type="text" placeholder="Send a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
