



import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../PostsData/Posts.css";

function CreatePost({ post }) {
  const [isVisible, setIsVisible] = useState(post);
  const [isMounted, setIsMounted] = useState(false);
  const searchMainRef = useRef(null);

  useEffect(() => {
    if (post) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10); // Slight delay for smooth transition
    } else {
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), 300); // Wait for transition to complete before unmounting
    }
  }, [post]);

  const [photo, setPhoto] = useState(null);
  const [message1, setMessage1] = useState("");
  const [resultData, setResultData] = useState();

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
      setResultData(result);
      console.log("Uploaded Post:", result);
      alert("File uploaded successfully!");
      window.location.href = "/";
    } catch (error) {
      console.log("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  // Hide CreatePost on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchMainRef.current && !searchMainRef.current.contains(event.target)) {
        setIsVisible(false);
        setTimeout(() => setIsMounted(false), 300); // Smooth close transition
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isMounted && (
      <div
        ref={searchMainRef}
        className={`create-post-container ${isVisible ? "visible" : "hidden"}`}
      >
        <form onSubmit={handleSubmit} className="SubmitPostUi" id="SubmitPostUi">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            className="bi bi-stickies-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5" />
            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z" />
          </svg>
          <h4 style={{color:"black" , textAlign:"center"}} >Select or Drag photo here</h4>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required placeholder="Image file"
            />
          </div>
          <div>
            <input
              type="text"
              value={message1}
              onChange={handleMessage1Change}
              placeholder="Enter Message"
              required
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  );
}

export default CreatePost;
