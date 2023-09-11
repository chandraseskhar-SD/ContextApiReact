import TestData from "./data";
import TimeFunction from "./TimeFunction";
import { GiNetworkBars } from "react-icons/gi";
import { LuWifi } from "react-icons/lu";
import { FaBatteryFull } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import "./GroupChat.css";
import phonecall from "../Assets/phonecall.png";
import user from "../Assets/user.png";
import messagecircle from "../Assets/messagecircle.png";
import settings from "../Assets/settings.png";
import { useState } from "react";
import array from "./data";
import { json } from "react-router-dom";
import LoginPage from "./LoginPage";
import yoga from "../Assets/yoga.png";
import { useNavigate } from "react-router-dom";

const GroupChat = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  // console.log(array.filter((item)=>item.first_name.tolowerCase().includes(query)))
  const savedData = localStorage.getItem("BotResponse");
  const userData = JSON.parse(savedData);
  console.log(userData[0]["GroupName"]);
  return (
    <div className="groupchat-head">
      <div className="container1-groupchat container ">
        <div className="groupchat-shadowtop">
        <div className="row top-row ">
          <div className="col-6">
            <div className="time-para"><TimeFunction/></div>
          </div>
          <div className="col-6 top-symbols d-flex justify-content-end">
            <h1>
              <GiNetworkBars className="ginetwork" />
            </h1>
            <h1>
              <LuWifi className="luwifi" />
            </h1>
            <h1>
              <FaBatteryFull className="fabattery" />
            </h1>
          </div>
        </div>
        <div className="row second-row mt-4">
          <div className="col-6">
            <h6 className="group-chat">Group chat</h6>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <LiaEditSolid className="liaeditsolid" />
          </div>
        </div>
        <div className=" container d-flex justify-content-between groupchatsearch-div">
          <div className="col-6 search-row-col d-flex">
            <button type="submit" className="search-button-icon">
              <AiOutlineSearch aria-hidden="true" />
            </button>
            <input
              type="text"
              placeholder="search"
              className="search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="second-row-col2  ">
            <div>
              <GoPlus className="goplus" />
            </div>
            <div className="newgroup">New Group</div>
          </div>
        </div>
        </div>
        {/* <hr className="groupchat-head-break-line"></hr> */}
        <div className=" dynamic-group d-flex justify-content-between mt-3">
          <img src={yoga} className="dynamic-img" />
          <div className="dynamic-name">
            <h5 className="groupchat-groupname"onClick={() => navigate("./SpecificGapChat")}>
              {userData[0]["GroupName"]}
            </h5></div>
            <p className="group-time">11:54 AM</p>
          
          </div>
          <div className="d-flex groupname-chatmsg ">
            <div>
            <small className="dynamic-msg">share her details</small>
            </div>
            <div className="groupchat-count"><div className="d-flex justify-content-center">4</div></div>
          </div>
        <hr className="breakline"></hr>
        <div className="group-prifile">
          <TestData />
        </div>
        <hr className="group-line"></hr>
        <div className="groupchat-footer d-flex justify-content-around">
          <img src={phonecall} />
          <img src={user} />
          <img src={messagecircle} />
          <img src={settings} />
        </div>
      </div>
    </div>
  );
};
export default GroupChat;
