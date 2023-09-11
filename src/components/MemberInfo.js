import React from "react";
import "./MemberInfo.css";
import { GiNetworkBars } from "react-icons/gi";
import { LuWifi } from "react-icons/lu";
import { FaBatteryFull, FaChevronLeft } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import TimeFunction from "./TimeFunction";
import MemberData from "./MemberData";
import phonecall from "../Assets/phonecall.png";
import user from "../Assets/user.png";
import messagecircle from "../Assets/messagecircle.png";
import settings from "../Assets/settings.png";
import SelectMember from "./SelectMember";
import { useNavigate } from "react-router-dom";
const MemberInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="memberinfo-main1">
      <div className="memberinfo-main container d-flex justify-content-center">
        <div className=" ">
              <div className="row">
                <div className="col-6">
              <img
              src={require("../Assets/chevron-left.png")}
              className="back-selector"
            />
            </div>
            
            <div className=" col-6 d-flex justify-content-between memberinfo-network-batteryicons">
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
            <div className="memberinfo-name-icon mt-2 d-flex justify-content-center">
              <img src={require("../Assets/young.png")} />
            </div>
            <div className="d-flex justify-content-center memberinfo-famjam">
            <h4 className="">Fam Jam</h4></div>
          <div className="d-flex justify-content-between member-all">
            <h6 className="">All Participants</h6>
            <div className="d-flex justify-content-between memberinfo-plus-delete-icon">
              <button type="submit" className="member-button-icon">
                <AiOutlineSearch
                  aria-hidden="true"
                  className="memberinfo-search"
                />
              </button>
              <h6 className="">
                <GoPlus className="member-plus" />
              </h6>
              <img
                src={require("../Assets/trash-2.png")}
                className="member-trash"
                onClick={() => navigate("./selectMember")}
              />
            </div>
          </div>
          <div className="member-info-details">
            <MemberData />
          </div>
          <hr className="common-border"></hr>
          <div className="memberdata-footer d-flex justify-content-around">
            <img src={phonecall} />
            <img src={user} />
            <img src={messagecircle} />
            <img src={settings} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MemberInfo;
