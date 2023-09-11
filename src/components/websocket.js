import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import wallpaper from "../Assets/wallpaper.png";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import useWebSockets from "../websocket";
// import useWebSocket from 'react-use-websocket';
import { useCallback } from "react";
// import setIsOpen
import { Component } from "react";
// import Websocket from "react-websocket";
// import { WebSocket } from 'websocket';

// const LoginPage = () =>{
//     const [loading, setLoading] = useState(true);
//   const [orders, setOrders] = useState([]);
//   const [subscription, setSubscription] = useState({
//     event: 'bts:subscribe',
//     data: {
//       channel: 'order_book_btcusd'
//     }
//   });
//   const ws = new WebSocket('wss://ws.bitstamp.net');
//   const initWebsocket = () => {
//     ws.onopen = () => {
//       ws.send(JSON.stringify(subscription));
//     };
//     ws.onmessage = (event) => {
//       const response = JSON.parse(event.data);
//       switch (response.event) {
//         case 'data':
//           setOrders(response.data);
//           setLoading(false);
//           break;
//         case 'bts:request_reconnect':
//           initWebsocket();
//           break;
//         default:
//           break;
//       }
//     };
//     ws.onclose = () => {
//       initWebsocket();
//     };
//   };

//   useEffect(() => {
//     initWebsocket();
//   }, [orders, subscription]);

//   console.log(orders);

//     const navigate = useNavigate();
//     const [data, setData] = useState({
//         FirstName:"",
//         PhoneNumber:"",
//         LastName :""

//     });

//     const handleChange = (event)=>{
//         const {name, value} = event.target;
//         setData({
//             ...data,
//             [name] : value,
//         })
//     }
//         // var storeValue = JSON.parse(localStorage.getItem('data') || "[]")
//         const handleSubmit = async(event) =>{
//             try{
//                 // usews();
//                 const response = await axios.post('https://sozj1jms93.execute-api.us-east-1.amazonaws.com/Test/users', data, {responseType: "json"});
//                 const jsonData = await response.data;
//                 setData(jsonData);

//                 }catch(error){
//                     console.log('error',error)
//                 }
//                 console.log(data);
//                 navigate('./GroupChat')
//                 event.preventDefault();
//                 }

//     return  (        <div className="d-flex justify-content-center login-items">
//         <form className="login-form" onSubmit={handleSubmit}>
//             {orders.bids.map((el, index) => (
//         <tr key={index}>
//           <td> {el[0]} </td>
//           <td> {el[1]} </td>
//         </tr>
//       ))}
//             <div className="container mt-4">
//             <div className="mt-4">
//             <label>FirstName:</label>
//             <input type ="text" name="FirstName" value={data.FirstName} onChange={handleChange} className="firstName"/>
//             </div>
//             <div className="mt-4">
//             <label>LastName:</label>
//             <input type ="text"  name="LastName" className="lastName" value={data.LastName} onChange={handleChange}/>
//             </div>

//            <div className="mt-4">
//             <label>MobileNo:</label>
//             <input type="Number" name="PhoneNumber" value={data.PhoneNumber} onChange={handleChange} className="phoneno"/>
//             </div>
//             <div className="d-flex justify-content-center mt-4">
//                 <button className="login-submit" type="button" onClick={handleSubmit}>Submit</button>
//             </div>
//             </div>
//         </form>
//         </div>
//     )
// }
// export default LoginPage;

// import { useEffect, useState } from 'react';
const ChatPage = () => {
  var user = "";
  var message_send = "";
  const [messages, setMessages, new_data] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create WebSocket connection
    const newSocket = new WebSocket(
      "wss://b6gj9e5y40.execute-api.us-east-1.amazonaws.com/test?username=988888888"
    );

    // Event handler for WebSocket connection
    newSocket.onopen = () => {
      console.log("WebSocket connection established");
    };

    //    const new_data = []

    // Event handler for receiving messages
    newSocket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      console.log(receivedMessage);

      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const handleMessageSend = () => {
    if (inputMessage) {
      const message = {
        action: "onMessage",
        sender: "Me",
        received_message: inputMessage,
      };
      setMessages((prevMessages) => [...prevMessages, message]);
      socket.send(JSON.stringify(message));
      console.log(message);
      setInputMessage("");
    }
  };
  console.log("messages: ", messages);
  return (
    <div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>
            <span>{message.sender}: </span>
            <span>{message.received_message}</span>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
