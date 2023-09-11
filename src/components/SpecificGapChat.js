import { GiNetworkBars } from "react-icons/gi";
import { LuWifi } from "react-icons/lu";
import { FaBatteryFull, FaChevronLeft } from "react-icons/fa";
import TimeFunction from "./TimeFunction";
import phonecall from "../Assets/phonecall.png";
import user from "../Assets/user.png";
import messagecircle from "../Assets/messagecircle.png";
import settings from "../Assets/settings.png";
import "./SpecificGapChat.css";
import { useNavigate } from "react-router-dom";
import ChatBot from "./ChatBot";
import yoga from "../Assets/yoga.png";
import GroupChat from "./GroupChat";
import userData from "./GroupChat";

const SpecifiGapCaht = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("BotResponse") || "[]");
 const data = JSON.parse(localStorage.getItem("data"));
 console.log(data);
  return (
    <div className="container1-specificgapcahat ">
      <div className="specificgroupcahat">
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
        <div className=" container d-flex gapchat-top4 justify-content-between mt-4">
          <img
             src={require("../Assets/chevron-left.png")}
             className="specificback-selector" onClick={()=> navigate('./GroupChat')}
          />
          <div className="d-flex flex-row specific-profileName">
            <img
              src={yoga}
              className="gapchat-young"
              onClick={() => navigate("./MemberInfo")}
            />
            <h6 className="gap-chat-name">{userData[0]["GroupName"]}</h6>
          </div>
          <img
            src={require("../Assets/view participants.png")}
            className="gapchat-participant"
          />
        </div>
        <div className="specific-bot-div">
          <ChatBot userName={data.FirstName}/>
        </div>
      </div>
    </div>
  );
};
export default SpecifiGapCaht;
