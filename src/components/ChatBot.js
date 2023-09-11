import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { icon, text } from "@fortawesome/fontawesome-svg-core";
import "./ChatBot.css";
import sendIcon from "../Assets/sendIcon.png";
import smile from "../Assets/smile.jpg";

const ChatBot = (props) => {
  const chatContainerRef = useRef(null);
  var user = "";
  var message_send = "";
  const [messages, setMessages, new_data] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [isConected, setisConected] = useState(false);

  useEffect(() => {
    // Create WebSocket connection
    const newSocket = new WebSocket(
      "wss://b6gj9e5y40.execute-api.us-east-1.amazonaws.com/test?username="+ props.userName
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
      if (receivedMessage.received_message) {
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      }
      // else if(receivedMessage.message === "Internal server error"){
      //   setMessages((prevMessages) => [...prevMessages, {sender:"Rada", received_message:"Am not able find out your request"}]);

      // }
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
        sender: "You",
        received_message: inputMessage,
      };
      setMessages((prevMessages) => [...prevMessages, message]);
      socket.send(JSON.stringify(message));
      console.log(message);
      setInputMessage("");
    }
  };
  console.log("messages: ", messages);

  const handleEnterkey = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      handleMessageSend(event);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  return (
    <div className="container chatbot-container">
      <div ref={chatContainerRef} className="chatbot-container1">
        <div className="chat-msg ">
          <div>
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className="">
                  <div
                    className={
                      message.sender === "You" ? "userInput" : "botInput"
                    }
                  >
                    <p className="bot-response ">{message.sender} </p>
                    <p className="bot-message">{message.received_message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="input-container">
<input
         type="text"
         value={inputMessage}
         onChange={(e) => setInputMessage(e.target.value)}
       />
<button onClick={handleMessageSend}>Send</button>
</div> */}
          </div>
        </div>
      </div>
      <div className="chat-input d-flex">
        {/* <img src={smile} className="smile-image"/> */}
        <input
          type="text"
          onKeyDown={handleEnterkey}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
          className="chatbot-input"
        />
        <button onClick={handleMessageSend} className="chatbot-button">
          <img src={sendIcon} className="chatbot-sender" />
        </button>
      </div>
    </div>
  );
};
export default ChatBot;
