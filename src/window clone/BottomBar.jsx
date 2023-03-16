import React from "react";
import { DiWindows } from "react-icons/di";
import { IoMdSettings } from "react-icons/io";
import explorer from "./media/explorer.png";
import vscode from "./media/visual-studio-code-1.svg";
import { MdExpandLess } from "react-icons/md";
import { IoBatteryFullSharp } from "react-icons/io5";
import { AiFillSkype } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";
import { BsVolumeUp } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
const BottomBar = () => {
  return (
    <>
      <div className="bottombar">
        <div className="left-bar">
          <div className="start">
            <DiWindows className="windowIcon" />
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Type here to search"
            />
          </div>
          <div className="task-icons">
            <span>
              <IoMdSettings className="setting" />
            </span>
            <span>
              <img className="explorer" src={explorer} alt="file explorer" />
            </span>
            <span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"
                className="chrome"
                alt="chrome"
              />
            </span>
            <span>
              <img src={vscode} alt="vscode" className="vscode" />
            </span>
          </div>
        </div>
        <div className="right-bar">
          <div className="show-icons">
            <MdExpandLess className="right-task-icon"/>
          </div>
          <div className="battery">
            <IoBatteryFullSharp className="right-task-icon"/>
          </div>
          <div className="skype">
            <AiFillSkype className="right-task-icon"/>
          </div>
          <div className="internet">
            <AiOutlineWifi className="right-task-icon"/>
          </div>
          <div className="sound">
            <BsVolumeUp className="right-task-icon"/>
          </div>
          <div className="date-and-time">
            <p>10:20 PM</p>
            <p>07-Mar-23</p>
          </div>
          <div className="notification">
            <IoMdNotificationsOutline className="right-task-icon"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
