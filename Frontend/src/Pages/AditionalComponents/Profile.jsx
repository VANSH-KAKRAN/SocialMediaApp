// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Aditionalcss.css";

// function Profile() {
//   const [Details, setDetails] = useState("");
//   const id = localStorage.getItem("Chat-authUser");
//   const [Upload, setUploads] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://localhost:2000/api/profile", id, {
//         withCredentials: true,
//       })
//       .then((Uploads) => {
//         setUploads(Uploads.data);
//         console.log("Uploads", Uploads.data);
//       });

//     // Fetch user data based on the user ID
//     if (id) {
//       axios
//         .get(`http://localhost:2000/you?id=${id}`, { withCredentials: true })
//         .then((response) => {
//           console.log(response.data); // Log the user data
//           setDetails(response.data.userData); // Set user data in state
//         })
//         .catch((error) => {
//           console.error("Error fetching user data:", error);
//         });
//     }
//   }, [id]);

//   return (
//     <div>
//       <div className="Profile">
//         <div className="UpperProfile">
//           <div className="upper1">
//             <div className="image">
//               {/* Display the profile picture */}
//               <img
//                 style={{ width: "80px", height: "80px" }}
//                 src={Details.profilePic}
//                 alt="Profile"
//                 className="profilePic"
//               />
//             </div>
//             <div className="UserInfo">
//               <div className="line1">
//                 <li>{Details.username}</li>
//                 <div style={{ display: "flex", gap: "20px" }}>
//                   <button>Edit Profile</button>
//                   <button>View Archive</button>
//                 </div>
//                 <li>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="25"
//                     height="25"
//                     fill="currentColor"
//                     class="bi bi-gear-fill"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
//                   </svg>
//                   {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-gear-wide" viewBox="0 0 16 16">
//                     <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622-.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
//                   </svg> */}
//                 </li>
//               </div>
//               <div className="line2">
//                 <li>posts 0</li>{" "}
//                 {/* You can update this with dynamic data later */}
//                 <li>followers 99</li> {/* Update based on actual data */}
//                 <li>following 7</li> {/* Update based on actual data */}
//               </div>

//               <div className="line3">
//                 <li>{Details.fullname}</li> {/* Display the full name */}
//               </div>
//             </div>
//           </div>
//           <div className="plus">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               style={{ width: "50px" }}
//               fill="currentColor"
//               className="bi bi-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
//             </svg>
//           </div>
//         </div>
//         <div className="LowerProfile">
//           <div className="postsProile">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="25"
//               height="25"
//               fill="currentColor"
//               className="bi bi-collection"
//               viewBox="0 0 16 16"
//             >
//               <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
//             </svg>
//             POSTS
//           </div>
//           <div className="saved">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="25"
//               height="25"
//               fill="currentColor"
//               className="bi bi-bookmark"
//               viewBox="0 0 16 16"
//             >
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
//             </svg>
//             SAVED
//           </div>
//           <div className="tagged">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="25"
//               height="25"
//               fill="currentColor"
//               className="bi bi-person-rolodex"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
//               <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
//             </svg>
//             TAGGED
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Aditionalcss.css";

function Profile() {
  const [Details, setDetails] = useState("");
  const id = localStorage.getItem("Chat-authUser");
  const [mergedPosts, setMergedPosts] = useState([]); // Merged posts and reels

  useEffect(() => {
    if (id) {
      // Fetch user details
      axios
        .get(`http://localhost:2000/you?id=${id}`, { withCredentials: true })
        .then((response) => {
          console.log("User Details:", response.data);
          setDetails(response.data.userData);
        })
        .catch((error) => console.error("Error fetching user data:", error));

      // Fetch posts and reels
      axios
        .get(`http://localhost:2000/api/profile?id=${id}`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log("User Posts:", response.data);
          const posts = response.data.posts || [];
          const reels = response.data.reels || [];

          // Add a type identifier to differentiate posts and reels
          const formattedPosts = posts.map((post) => ({
            ...post,
            type: "post",
            timestamp: new Date(post.createdAt).getTime() || 0, // Ensure timestamps exist
          }));

          const formattedReels = reels.map((reel) => ({
            ...reel,
            type: "reel",
            timestamp: new Date(reel.createdAt).getTime() || 0, // Ensure timestamps exist
          }));

          // Merge and sort by timestamp (newest first)
          const mergedData = [...formattedPosts, ...formattedReels].sort(
            (a, b) => b.timestamp - a.timestamp
          );

          setMergedPosts(mergedData);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }
  }, [id]);

  return (
    <div className="Profile">
      <div className="UpperProfile">
        <div className="upper1">
          <div className="image">
            {/* Profile Picture */}
            <img
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              src={Details.profilePic}
              alt="Profile"
              className="profilePic"
            />
          </div>
          <div className="UserInfo">
            <div className="line1">
              <li>{Details.username}</li>
              <div style={{ display: "flex", gap: "20px" }}>
                <button>Edit Profile</button>
                <button>View Archive</button>
              </div>
            </div>
            <div className="line2">
              <li>Posts & Reels {mergedPosts.length}</li>
              <li>Followers 99</li>
              <li>Following 7</li>
            </div>
            <div className="line3">
              <li>{Details.fullname}</li>
            </div>
          </div>
        </div>
      </div>

      {/* Merged Posts & Reels Section */}
      {/* <div className="LowerProfile"> */}
      {/* <h2>Posts & Reels</h2> */}
      <div className="LowerProfile">
        <div className="pst">
          <div className="postsProile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-collection"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
            </svg>
            POSTS
          </div>
          <div className="saved">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-bookmark"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
            </svg>
            SAVED
          </div>
          <div className="tagged">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-rolodex"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
            </svg>
            TAGGED
          </div>
        </div>

        <div className="contentGrid">
          {mergedPosts.length > 0 ? (
            mergedPosts.map((item) => (
              <div key={item._id} className="contentCard">
                {item.type === "post" ? (
                  <img
                    src={item.postImage}
                    alt="Post"
                    className="contentImage"
                  />
                ) : (
                  <video controls className="contentVideo">
                    <source src={item.postReel} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {/* <p>{item.postMessaage || item.postMessage}</p> */}
              </div>
            ))
          ) : (
            <p>No content yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
