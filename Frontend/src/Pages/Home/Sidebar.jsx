// import React from "react";
// import "./Home.css";

// const Sidebar = ({ users, onUserClick }) => {
//   if (window.innerWidth > 600) {
//     var hide = document.getElementById("details");

//     hide.textContent = ""
//   }

//   return (
//     <div className="chat-list">
//       {/* <h2>Users</h2> */}
//       {users.length > 0 ? (
//         users.map((user) => (
//           <div
//             key={user._id}
//             className="user-item"
//             onClick={() => onUserClick(user)}
//           >
//             <img
//               src={user.profilePic}
//               alt={user.username}
//               className="user-avatar"
//             />
//             <div id="details" className="user-details">
//               {/* <p className="user-name">{user.fullname}</p> */}
//               <p className="user-username">@{user.username}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading users...</p>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState, useEffect } from "react";
// import "./Home.css";

// const Sidebar = ({ users, onUserClick }) => {
//   // State to store window width
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // Update window width on resize
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);

//     window.addEventListener("resize", handleResize);

//     // Cleanup event listener on unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="chat-list">
//       {users.length > 0 ? (
//         users.map((user) => (
//           <div
//             key={user._id}
//             className="user-item"
//             onClick={() => onUserClick(user)}
//           >
//             <img
//               src={user.profilePic}
//               alt={user.username}
//               className="user-avatar"
//             />
//             {/* Conditionally render details based on window width */}
//             <div className="user-details">
//               {windowWidth <= 600 ? (
//                 <p className="user-username">@{user.username}</p>
//               ) : (
//                 <>
//                   {/* You can display more details for larger screens */}
//                   <p className="user-name">{user.fullname}</p>
//                   <p className="user-username">@{user.username}</p>
//                 </>
//               )}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading users...</p>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from "react";
import "./Home.css";

const Sidebar = ({ users, onUserClick }) => {
  // State to store window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="chat-list">
      {users.length > 0 ? (
        users.map((user) => (
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
            <div
              className="user-details"
              style={{ display: windowWidth < 600 ? "none" : "block" }} // Conditionally hide on small screens
            >
              <p className="user-name">{user.fullname}</p>
              <p className="user-username">@{user.username}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default Sidebar;
