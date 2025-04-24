import React, { useState, useEffect, useRef } from "react";
import "./ShowContant.css";

const ShowContent = ({ media, onClose }) => {
  const [imageStyle, setImageStyle] = useState({ width: "600px" });
  const [contentStyle, setContentStyle] = useState({ maxWidth: "600px" });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (e.target.className === "show-content-overlay") {
      onClose(); // Close the modal when clicking outside the content
    }
  };

  useEffect(() => {
    if (media.type === "video") {
      setContentStyle({ });
    } else {
      setContentStyle({ width: "90%" });
      // setContentStyle({ maxWidth: "600px" });
      setImageStyle({ width: "100%" , height:"70vh", objectFit:"contain"});
    }
  }, [media]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="show-content-overlay" onClick={handleOutsideClick}>
      <div className="show-content" style={contentStyle}>
        <div className="profile-container">
          <img 
            src={media.profilePic}
            alt={`${media.username}'s profile`}
            className="profile-pic"
            width="50"
          />
          <div className="profile-details">
            <h3>{media.fullname}</h3>
            <p>@{media.username}</p>
          </div>
        </div>
        {media.type === "video" ? (
          <div className="video-container">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              className="media-content video-responsive"
              onClick={togglePlayPause}
            >
              <source src={media.mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="volume-button" onClick={toggleMute}>
              {isMuted ? "🔇" : "🔊"}
            </button>
          </div>
        ) : (
          <img
            id="imageId"
            src={media.mediaUrl}
            alt={media.message}
            className="media-content"
            style={imageStyle}
          />
        )}
        <p className="media-message">{media.message}</p>
        <small className="media-timestamp">
          {new Date(media.createdAt).toLocaleString()}
        </small>
      </div>
    </div>
  );
};

export default ShowContent;
