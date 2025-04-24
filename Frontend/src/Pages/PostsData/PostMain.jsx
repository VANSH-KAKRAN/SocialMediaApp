import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Posts.css";
import metavisionlogo from "../Home/images/metavisionlogo.jpg";

function PostMain() {
  const HandleMessagesButton = () => {
    window.location.href = "/posts";
  };

  const [users, setUsers] = useState([]);
  window.onload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchRoundProfile = async () => {
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

    fetchRoundProfile();
  }, []);

  const handleShowCreate = () => {
    document.getElementById("SubmitPostUi").style.display = "flex";
  };

  const HandleCreateHide = () => {
    document.getElementById("SubmitPostUi").style.display = "none";
  };

  // Form data
  const [resultData, setResultData] = useState();
  const [photo, setPhoto] = useState(null);
  const [message1, setMessage1] = useState("");
  const [response, setResponse] = useState(null);

  // Data for displaying posts
  const [posts, setPosts] = useState([]); // Stores an array of posts

  // Get user data from localStorage
  const userId = localStorage.getItem("Chat-authUser");
  console.log("Token:", userId);

  const handleFileChange = (e) => setPhoto(e.target.files[0]);
  const handleMessage1Change = (e) => setMessage1(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("message1", message1);
    formData.append("id", userId);

    try {
      const response = await fetch("http://localhost:2000/api/posts", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setResponse(result);
      setResultData(result);

      console.log("Uploaded Post:", result);
      alert("File uploaded successfully!");
      // Refresh the list of posts
    } catch (error) {
      console.log("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  // useEffect(() => {
  // }, []);

  const GetPosts = () => {
    axios
      .get("http://localhost:2000/api/posts", { withCredentials: true })
      .then((response) => {
        console.log("responseData from posts", response.data);
        setPosts(response.data); // Set all posts in state
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };
  useEffect(() => {
    GetPosts();
  }, []);

  //   const spinAnimation = `
  // @keyframes spin {
  //   0% {
  //     transform: rotate(0deg);
  //   }
  //   100% {
  //     transform: rotate(360deg);
  //   }
  // }
  // `;

  return (
    <div className="App">
      <div className="instagram-clone">
        {/* Main Content */}
        <main className="main-content">
          {/* <div className="storyPosts"> */}

          {/* Stories */}
          <div className="stories">
            {users.length > 0 ? (
              users.map((user) => (
                <div
                  key={user._id}
                  className="user-items"
                  // onClick={() => onUserClick(user)}
                >
                  <div className="story">
                    <img
                      src={user.profilePic}
                      alt={user.username}
                      className="user-avatar"
                    />
                    <p>@{user.username}</p>
                  </div>
                </div>
              ))
            ) :
             (
              // <p>Loading users...</p>
              <div className="logoimg">
                <img
                  style={{
                    position: "absolute",
                    width: "100px",
                    top: "50%",
                    left: "50%",
                    borderRadius: "50%",
                  }}
                  src={metavisionlogo}
                  alt=""
                />
              </div>
            )}
          </div>
          {/* posts */}

          <div className="bottomMain">
            <div className="posts">
              {posts.map((post, index) => (
                <div key={index} className="post">
                  <div className="post-header">
                    <img
                      className="profile-pic"
                      src={post.profilePic} // Ensure the correct profile picture is passed
                      alt="profile"
                    />
                    <div className="user-info">
                      <h4>{post.username}</h4> {/* Display username */}
                      <p>{post.fullname}</p> {/* Display fullname */}
                    </div>
                    {/* <div className="logo">
            <img src="logo_url_here" alt="Logo" width="30" />
          </div> */}
                  </div>

                  {post.postImage && (
                    <img
                      className="post-image"
                      src={post.postImage}
                      alt="post"
                    />
                  )}

                  <p className="post-message">
                    {/* <strong>Message:</strong>  */}
                    {post.postMessaage}
                  </p>
                </div>
              ))}
            </div>

            {/* Suggestions */}
            <aside className="suggestions">
              <div className="profile-switch">
                <p>{/* <strong>Vansh Chaudhary</strong> */}</p>
                {/* <button>Switch</button> */}
              </div>
              <h6>Suggested for you</h6>

              <div className="suggestion">
                {users.length > 0 ? (
                  users.map((user) => (
                    <div
                      key={user._id}
                      className="user-item"
                      // onClick={() => onUserClick(user)}
                    >
                      <img
                        src={user.profilePic}
                        alt={user.username}
                        className="user-avatar"
                      />
                      <div className="user-details">
                        <p className="user-username">@{user.username}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p></p>
                )}

                {/* <button>Follow</button> */}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PostMain;
