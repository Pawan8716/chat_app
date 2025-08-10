import React from "react";
import "./LeftSidebar.css";
import assets from "../../assets/assets";

const LeftSidebar = () => {
  return (
    <div className="ls">
      <div className="ls_top">
        <div className="ls_nav">
          <img src={assets.logo} className="logo" alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="ls_search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search here...." />
        </div>
      </div>
      <div className="ls_list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div key={index} className="friends">
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Richard Sanford</p>
                <span>Hello, How are u?</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
