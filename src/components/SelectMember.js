import React, { useState } from "react";
import "./MemberInfo.css";
import "./MemberData.css";
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
import { useNavigate } from "react-router-dom";
const SelectMember = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      imageurll: require("../Assets/ocean.png"),
      first_name: "You",
      msg: "Admin",
      selected: false,
    },
    {
      id: 2,
      imageurll: require("../Assets/sportsman.png"),
      first_name: "Mat",
      msg: "Admin",
      image: require("../Assets/chevron-left.png"),
      selected: false,
    },
    {
      id: 3,
      imageurll: require("../Assets/to-walk-g1cd47a695_640 2.png"),
      first_name: "Sid",
      image: require("../Assets/chevron-left.png"),
      selected: false,
    },
    {
      id: 4,
      imageurll: require("../Assets/women.png"),
      first_name: "Zen",
      image: require("../Assets/chevron-left.png"),
      selected: false,
    },
  ]);

  const handleChange = (event, itemId) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, selected: event.target.checked };
      }
      return item;
    });
    setData(updatedData);
    console.log(data);
  };
  var a = "";
  const handleDeleteChecked = (ID) => {
    data.filter((item) => {
      if (item.selected === true) {
        a = item.selected;
        console.log(a);
      }
    });
    if (a) {
      alert("Are you sure want delete user from group chat?");
      const updatedData = data.filter((item) => !item.selected);
      setData(updatedData);
      console.log(data);
    } else {
      alert("please select value");
    }
  };
  return (
    <div className="selectmember-container1">
      <div className="container selectmember-container ">
        <div className="row top-row ">
          <div className="col-6">
            <p className="selecttime-para">
            <img
            src={require("../Assets/chevron-left.png")}
            className="selectback-selector"
          />
            </p>
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
        <div className=" selectmember-profile mt-2 d-flex justify-content-center">
            <img
              src={require("../Assets/young.png")}
              onClick={() => navigate("./MemberInfo")}
            />
             </div>
            <div className="d-flex justify-content-center">
            <h4 className="selectmember-famjam">
              Fam Jam
            </h4>
          </div>
       
        <div className=" container d-flex justify-content-between selectmember-all-deleterow">
          <h6 className="selectmember-all">All Participants</h6>
          <div className="d-flex justify-content-around">
            <button type="submit" className="selectmember-button-icon">
              <AiOutlineSearch
                aria-hidden="true"
                className="selectmember-search"
              />
            </button>
            <h6 className="">
              <GoPlus className="selectmember-plus" />
            </h6>
            <img
              src={require("../Assets/trash-2.png")}
              className="member-trash"
              onClick={handleDeleteChecked}
            />
          </div>
        </div>
        <div className="selectmember-info-details">
          {data.map((item) => (
            <div key={item.id}>
              <div className="container  d-flex justify-content-between mt-4">
                <div>
                  <img src={item.imageurll} />
                </div>
                <div className="memberdata-name-msg">
                  <h5>{item.first_name}</h5>
                  <p>{item.msg}</p>
                </div>
                <div>
                  <input
                    name="checkbox"
                    type="checkbox"
                    className="memberdata-checkbox"
                    checked={item.checked}
                    value={data.checbox}
                    onChange={(e) => handleChange(e, item.id)}
                  />
                </div>
              </div>
              <hr className="memberdata-border d-flex justify-content-between"></hr>
            </div>
          ))}
        </div>
        <hr className="common-border"></hr>
        <div className="memberdata-footer d-flex justify-content-around mt-4">
          <img src={phonecall} />
          <img src={user} />
          <img src={messagecircle} />
          <img src={settings} />
        </div>
      </div>
    </div>
  );
};
export default SelectMember;
