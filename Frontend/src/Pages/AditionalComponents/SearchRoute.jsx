
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import './Aditionalcss.css'
import '../PostsData/Posts.css'
// Import CSS for transitions

function SearchRoute({ value }) {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(value);
  const [isMounted, setIsMounted] = useState(false);

  const searchMainRef = useRef(null);

  // Update visibility based on `value` prop
  useEffect(() => {
    if (value) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10); // Slight delay for smooth transition
    } else {
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), 300); // Wait for transition to complete before unmounting
    }
  }, [value]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/users", {
          withCredentials: true,
        });
        setUsers(response.data.Users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  // Hide SearchMain on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchMainRef.current && !searchMainRef.current.contains(event.target)) {
        setIsVisible(false);
        setTimeout(() => setIsMounted(false), 300); // Close smoothly
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter users based on input value
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    isMounted && (
      <div
        id="SearchMain"
        ref={searchMainRef}
        className={`search-main ${isVisible ? "show" : "hide"}`}
      >
        {/* Header Section */}
        <div className="search-header">
          <h2>Search</h2>
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <span onClick={() => setInputValue("")} className="clear-input">
              ✕
            </span>
          </div>
        </div>

        {/* Recent Section */}
        <div className="recent-header">
          <h3>Recent</h3>
          <span className="clear-all" onClick={() => setUsers([])}>
            Clear all
          </span>
        </div>

        {/* User Cards */}
        <div className="user-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div key={index} className="user-card">
                <img
                  src={user.profilePic || "https://via.placeholder.com/50"}
                  alt="Profile Pic"
                />
                <div className="user-info">
                  <p className="username">
                    {user.username} {user.isVerified && <span>✔</span>}
                  </p>
                  <p className="user-details">
                    {user.fullname} • {user.followersCount} followers
                  </p>
                </div>
                <span
                  className="remove-user"
                  onClick={() => {
                    setUsers((prev) =>
                      prev.filter((_, userIndex) => userIndex !== index)
                    );
                  }}
                >
                  ✕
                </span>
              </div>
            ))
          ) : (
            <p className="no-users">No users found</p>
          )}
        </div>
      </div>
    )
  );
}

export default SearchRoute;
