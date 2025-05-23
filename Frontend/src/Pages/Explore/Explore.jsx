import React, { useState, useEffect } from "react";
import ShowContent from "./ShowContant";
import axios from "axios";
import "./Explore.css";

// Assuming ShowContent is in the same folder

const MediaGallery = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/explore/media"
        );
        setMedia(response.data);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    }

    fetchMedia();
  }, []);

  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (item) => {
    setSelectedMedia(item); // Set the selected media
  };

  const closeShowContent = () => {
    setSelectedMedia(null); // Close the modal
  };

  return (
    <div
      id="media-container-top"
      className={selectedMedia ? "blur-background" : ""}
    >
      {/* Media Container */}
      <div className="media-container">
        {media.map((item, index) => (
          <div
            key={index}
            className="media-item"
            onClick={() => handleMediaClick(item)}
          >
            {item.type === "video" ? (
              <video width="300" style={{ cursor: "pointer" }}>
                <source src={item.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.mediaUrl}
                alt={item.message}
                width="300"
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ShowContent Component */}
      {selectedMedia && (
        <ShowContent media={selectedMedia} onClose={closeShowContent} />
      )}
    </div>
  );
};

export default MediaGallery;
