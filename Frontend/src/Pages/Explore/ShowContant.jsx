

// import React, { useState, useEffect } from "react";
// import "./ShowContant.css";

// const ShowContent = ({ media, onClose }) => {
//   const [imageStyle, setImageStyle] = useState({ width: "600px" });

//   const handleOutsideClick = (e) => {
//     if (e.target.className === "show-content-overlay") {
//       onClose(); // Close the modal when clicking outside the content
//     }
//   };

//   useEffect(() => {
//     if (media.type !== "video") {
//       setImageStyle({ width: "100%" });
//     }
//   }, [media]);

//   return (
//     <div className="show-content-overlay" onClick={handleOutsideClick}>
//       <div className="show-content">
//         <div>
//           <img
//             src={media.profilePic}
//             alt={`${media.username}'s profile`}
//             className="profile-pic card-img-top"
//             width="50"
//           />
//           <h3>{media.fullname}</h3>
//           <p>@{media.username}</p>
//         </div>
//         {media.type === "video" ? (
//           <video autoPlay className="card-img-top">
//             <source src={media.mediaUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img
//             id="imageId"
//             src={media.mediaUrl}
//             alt={media.message}
//             style={imageStyle} // Apply dynamic styles here
//           />
//         )}
//         <p>{media.message}</p>
//         <small>{new Date(media.createdAt).toLocaleString()}</small>

//         {/* <button className="close-button" onClick={onClose}>
//           Close
//         </button> */}
//       </div>
      
//     </div>
//   );
// };

// export default ShowContent;



// import React, { useState, useEffect } from "react";
// import "./ShowContant.css";

// const ShowContent = ({ media, onClose }) => {
//   // const [imageStyle, setImageStyle] = useState({ width: "600px" });

//   // const handleOutsideClick = (e) => {
//   //   if (e.target.className === "show-content-overlay") {
//   //     onClose(); // Close the modal when clicking outside the content
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (media.type !== "video") {
//   //     setImageStyle({ width: "100%" });
//   //   }
//   // }, [media]);
//   const [imageStyle, setImageStyle] = useState({ width: "600px" });
//   const [contentStyle, setContentStyle] = useState({ maxWidth: "600px" });

//   const handleOutsideClick = (e) => {
//     if (e.target.className === "show-content-overlay") {
//       onClose(); // Close the modal when clicking outside the content
//     }
//   };

//   useEffect(() => {
//     if (media.type === "video") {
//       setContentStyle({ maxWidth: "290px" });
//       document.getElementsByClassName("show-content").style.width="290px"
//     } else {
//       setContentStyle({ maxWidth: "600px" });
//       setImageStyle({ width: "100%" });
//     }
//   }, [media]);


//   return (
//     <div className="show-content-overlay" onClick={handleOutsideClick}>
//       <div className="show-content">
//         <div className="profile-container">
//           <img
//             src={media.profilePic}
//             alt={`${media.username}'s profile`}
//             className="profile-pic"
//             width="50"
//           />
//           <div className="profile-details">
//             <h3>{media.fullname}</h3>
//             <p>@{media.username}</p>
//           </div>
//         </div>
//         {media.type === "video" ? (
//           <video autoPlay controls className="media-content">
//             <source src={media.mediaUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img
//             id="imageId"
//             src={media.mediaUrl}
//             alt={media.message}
//             className="media-content"
//             style={imageStyle} // Apply dynamic styles here
//           />
//         )}
//         <p className="media-message">{media.message}</p>
//         <small className="media-timestamp">
//           {new Date(media.createdAt).toLocaleString()}
//         </small>
//       </div>
//     </div>
//   );
// };

// export default ShowContent;


import React, { useState, useEffect } from "react";
import "./ShowContant.css";

const ShowContent = ({ media, onClose }) => {
  const [imageStyle, setImageStyle] = useState({ width: "600px" });
  const [contentStyle, setContentStyle] = useState({ maxWidth: "600px" });

  const handleOutsideClick = (e) => {
    if (e.target.className === "show-content-overlay") {
      onClose(); // Close the modal when clicking outside the content
    }
  };

  useEffect(() => {
    if (media.type === "video") {
      setContentStyle({ maxWidth: "290px" });
    } else {
      setContentStyle({ maxWidth: "600px" });
      setImageStyle({ width: "100%" });
    }
  }, [media]);

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
          <video autoPlay controls className="media-content video-responsive">
            <source src={media.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            id="imageId"
            src={media.mediaUrl}
            alt={media.message}
            className="media-content"
            style={imageStyle} // Apply dynamic styles here
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
