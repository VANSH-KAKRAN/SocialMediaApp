

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Reel.css";

const ReelPage = () => {
  const [allReels, setAllReels] = useState([]);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const descriptionRefs = useRef([]);
  const [expandedReels, setExpandedReels] = useState({});
  const [truncatedReels, setTruncatedReels] = useState({});

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/posts/reel",
          {
            withCredentials: true,
          }
        );
        setAllReels(response.data);
      } catch (error) {
        console.error("Error fetching reels:", error);
      }
    };
    fetchReels();
  }, []);

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
      { threshold: 0.75 }
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

  useEffect(() => {
    const checkDescriptionHeight = () => {
      const newTruncatedReels = {};
      descriptionRefs.current.forEach((desc, index) => {
        if (desc) {
          newTruncatedReels[index] = desc.scrollHeight > 40; // Approx. 2 lines of text
        }
      });
      setTruncatedReels(newTruncatedReels);
    };

    checkDescriptionHeight();
  }, [allReels]);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      videoRefs.current.forEach((video) => {
        if (video) video.muted = newMutedState;
      });
      return newMutedState;
    });
  };

  const toggleExpand = (index) => {
    setExpandedReels((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };



  return (
    <div className="reels-container">
      {allReels.map((reel, index) => {
        const videoUrl = reel.postReel;

        return (
          <div key={reel.id || index} className="reel">
            <video 
              ref={(el) => (videoRefs.current[index] = el)}
              src={videoUrl}
              muted={isMuted}
              loop
              className="reel-video"
              onClick={() => handleVideoClick(index)}
            />
            <div className="overlay">
              <div className="reel-details">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={reel.profilePic || "default-avatar.jpg"}
                    alt={reel.username || "User"}
                    className="user-avatar"
                  />
                  <p className="user-name">{reel.username || "Unknown User"}</p>
                </div>

                <div>
                  <p
                    ref={(el) => (descriptionRefs.current[index] = el)}
                    className={`reel-description ${
                      expandedReels[index] ? "expanded" : "collapsed"
                    }`} style={{transition:"1s ease-in-out"}}
                  >
                    {reel.postMessage || "No description"}
                  </p>
                  {truncatedReels[index] && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="show-more-btn" style={{all:"unset"}}
                    >
                      {expandedReels[index] ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
              </div>
              <button className="volume-toggle" onClick={toggleMute}>
                {isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-volume-mute-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-volume-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                    <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReelPage;
