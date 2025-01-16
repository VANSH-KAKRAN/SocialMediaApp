import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import "./Home.css";
import background from "../Home/images/background.webp";
import chatlogo from "../Home/images/chatlogo.png";
const Home = () => {
  const styles = {
    backgroundImage: `url(${background})`,
    opacity: 0.1,
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
  };

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // const handleLogout = async () => {
  //   await axios
  //     .post("http://localhost:2000/api/auth/logout", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.removeItem("Chat-authUser");

  //       // Remove the cookie by setting it to expire in the past
  //       // document.cookie = "jwt; expires=Thu,  path=/http://localhost:5173; ";
  //       alert("cookie", document.cookie);

  //       window.location.href = "/login";
  //     });
  // };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios
          .get("http://localhost:2000/api/users", {
            withCredentials: true,
          })
          .then((data) => {
            console.log("data.data", data.data);

            setUsers(data.data.Users);
          });
      } catch (error) {
        window.location.href = "/login";
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="chat-app">
      {/* <div className="navbar"> */}
        {/* <img src={chatlogo} alt="chatlogo" />
        <h5>Chat App</h5> */}
{/* 
        <div onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fillRule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </div> */}
      {/* </div> */}
      {/* <h1>Chat App</h1> */}
      <div className="chat-container">
        <Sidebar users={users} onUserClick={handleUserClick} />

        {/* Chat Window to display messages of the selected user */}
        {selectedUser ? (
          <ChatWindow user={selectedUser} />
        ) : (
          <div className="empty-message" style={styles}>
            Select a user to view their messages
          </div>
        )}
      </div>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Home;
