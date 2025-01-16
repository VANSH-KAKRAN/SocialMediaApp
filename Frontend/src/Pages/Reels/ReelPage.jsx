
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Reel.css";

const ReelPage = () => {
  const [allReels, setAllReels] = useState([]);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);


  window.onload = function() {
    window.scrollTo(0, 0);
  };

  // Fetch reels data
  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/posts/reel", {
          withCredentials: true,
        });
        setAllReels(response.data.reverse()); // Assuming response.data is an array of reels
      } catch (error) {
        console.error("Error fetching reels:", error);
      }
    };
    fetchReels();
  }, []);

  // Auto play/pause videos based on viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting && video.readyState >= 3) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 } // Adjust as needed for when the video starts playing
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [allReels]);



  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  // Handle video play/pause on click

  // Toggle mute for all videos
  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      videoRefs.current.forEach((video) => {
        if (video) video.muted = newMutedState;
      });
      return newMutedState;
    });
  };

  // Render
  return (
    <div className="reels-container">
      {allReels.map((reel, index) => {
        const videoUrl = reel.postReel; // Always use the URL returned by the backend

        return (
          <div key={reel.id || index} className="reel">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={videoUrl} // Use the correct video URL for each reel
              muted={isMuted}
              loop
              className="reel-video"
              onClick={() => handleVideoClick(index)} // Play/Pause on click
              onError={(e) => {
                console.error("Error loading video:", e.target.src);
                e.target.poster = "video-error.png"; // Fallback image for video errors
              }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <div className="reel-details">
                <div style={{display:"flex"}}>

                <img
                  src={reel.profilePic || "default-avatar.jpg"} // Fallback for missing avatars
                  alt={reel.username || "User"}
                  className="user-avatar"
                  />
                  <p className="user-name">{reel.username || "Unknown User"}</p>
                  </div>

                <div>
                  <p className="reel-description">{reel.postMessage || "No description"}</p>
                </div>
              </div>
              <button className="volume-toggle" onClick={toggleMute}>
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReelPage;
