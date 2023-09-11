import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import wallpaper from "../Assets/wallpaper.png";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import profile1 from "../Assets/profile1.webp";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    MobileNumber: "",
    groupID: "g123",
  });

  localStorage.setItem("data", JSON.stringify(data));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // console.log("text",data)
  const handleSubmit = async (event) => {
    console.log(data);
    try {
      // usews();
      const response = await axios.post(
        "https://sozj1jms93.execute-api.us-east-1.amazonaws.com/Test/users",
        data,
        { responseType: "json" }
      );
      const jsonData = response.data;
      const finalResponse = jsonData.data.Item;
      console.log(finalResponse);
      let BotResponse = [];
      BotResponse.push(finalResponse);
      localStorage.setItem("BotResponse", JSON.stringify(BotResponse));
      console.log(BotResponse);
      {
        setData(finalResponse);
        console.log(data);
        navigate("./Groupchat");
      }
    } catch (error) {
      const errormsg = "User is not Registered";
      console.log("error", errormsg);
      alert(errormsg);
      setData({
        FirstName: "",
        LastName: "",
        MobileNumber: "",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center login-items">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="profile-image-login1 d-flex justify-content-center">
          <img src={profile1} className="profile-image-login" />
        </div>
        <div className="container login-terms justify-content-center">
          <div className="mt-4">
            <label>FirstName:</label>
            <input
              type="text"
              name="FirstName"
              className="firstName"
              value={data.FirstName}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label>LastName:</label>
            <input
              type="text"
              name="LastName"
              className="lastName"
              value={data.LastName}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label>MobileNo:</label>
            <input
              type="Number"
              name="MobileNumber"
              value={data.MobileNumber}
              onChange={handleChange}
              className="phoneno"
            />
          </div>
          <div className=" mt-4">
            <button
              className="login-submit d-flex justify-content-center"
              type="button"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
