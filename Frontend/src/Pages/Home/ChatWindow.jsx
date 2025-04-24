//

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { FaPaperclip, FaMicrophone } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

const ChatWindow = ({ user }) => {
  const nomessageyet = {
    position: "absolute",
    top: "50%",
    left: "50%",
  };
  const [messages, setMessages] = useState([]);
  const [message, setmessage] = useState([]);

  // const [ReceaveMessage, setReceaveMesssage] = useState([]);
  // useEffect(() => {
  const HandleMessageSending = async (e) => {
e.preventDefault();
    try {
      console.log("length", message.length);
      if (message.length === 0) {
        alert("message is empty");
      } else {
        await axios.post(
          `http://localhost:2000/api/message/send/${user._id}`,
          { message },
          { withCredentials: true }
        );
      }
      // HandleMessageSending();
    } catch (error) {
      console.log("error", error);
    }
  };
  // HandleMessageSending();
  // });

  const P = () => {
    setTimeout(() => {
      handleRestoreData();
      setmessage("");
    }, 200);
  };

  const handleRestoreData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/api/message/${user._id}`,
        {
          withCredentials: true,
        }
      );
      setMessages(response.data);
      console.log("restored", response.data);
      const container = document.getElementById("chatmessage");
      container.scrollTop = container.scrollHeight;
    } catch (error) {
      console.error("Error restoring messages:", error.message);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios
          .get(`http://localhost:2000/api/message/${user._id}`, {
            withCredentials: true,
          })
          .then((response) => {
            setMessages(response.data.data);
            console.log("id", response.data);
          });
        // if(handleRefresh){
        //   fetchMessages();
        // }
      } catch (error) {
        // console.error("Error fetching messages:", error.message);
      }
    };


    if (user) {
      handleRestoreData();

      // alert("messages has been featched successfully")
    }
  }, [user]);
  console.log("Message timestamp:", message.timestamp);


  return (
    <div className="chat-window">
      <div
        key={user._id}
        className="user-item"
        onClick={() => onUserClick(user)}
      >
        <img
          src={user.profilePic}
          alt={user.username}
          className="user-avatar"
        />
        <div className="user-details">
          <p className="user-name">{user.fullname}</p>
          <p className="user-username">@{user.username}</p>
        </div>
      </div>
      {/* <h2>Chat with {user.fullname}</h2> */}

      {/* <div className="chat-messages" id="chatmessage">
        {messages?.length > 0 ? (
          messages?.map((message) => (
            <div
              key={message._id}
              className={`message ${
                message.senderId === user._id ? "incoming" : "outgoing"
              }`}
            >
              <p>{message.message}</p>

              <small>{new Date().toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p className="nomessageyet" style={nomessageyet}>
            No messages yet.
          </p>
        )}
      </div> */}
      <div className="chat-messages" id="chatmessage">
  {messages?.length > 0 ? (
    messages.map((message) => (
      <div
        key={message._id}
        className={`message ${
          message.senderId === user._id ? "incoming" : "outgoing"
        }`}
      >
        <p>{message.message}</p>
        <small>
          {message.timestamp
            ? new Date(message.timestamp).toLocaleTimeString()
            : "Time not available"}
        </small>
      </div>
    ))
  ) : (
    <p className="nomessageyet">No messages yet.</p>
  )}
</div>

      {/* <div className="message-input-container">
        <FaPaperclip className="icon" />
        <input
          type="text"
          placeholder="Type a message"
          className="message-input"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <p onClick={P}>
          <AiOutlineSend
            className="icon"
            type="submit"
            onClick={HandleMessageSending}
          />
        </p>
      </div> */}
            <form className="message-input-container" onSubmit={HandleMessageSending}>
        <FaPaperclip style={{marginLeft:"7px"}} className="icon" />
        <input
          type="text"
          placeholder="Type a message"
          className="message-input"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button type="submit" onClick={P}>
          <AiOutlineSend
            className="icon"
            type="submit"
            // onClick={HandleMessageSending}
          />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
