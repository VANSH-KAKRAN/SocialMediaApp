// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "./Aditionalcss.css";

// function PostReel({ reelvalue }) {
//   const [isVisible, setIsVisible] = useState(reelvalue);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     if (reelvalue) {
//       setIsMounted(true);
//       setTimeout(() => setIsVisible(true), 10); // Slight delay for smooth transition
//     } else {
//       setIsVisible(false);
//       setTimeout(() => setIsMounted(false), 300); // Wait for transition to complete before unmounting
//     }
//   }, [reelvalue]);

//   const [reel, setreel] = useState(null);
//   const [message, setmessage] = useState("");

//   const localstorageId = localStorage.getItem("Chat-authUser");

//   const HandleSubmitReel = async (e) => {
//     e.preventDefault();
//     var reelData = new FormData();
//     reelData.append("postReel", reel);
//     reelData.append("postMessage", message);
//     reelData.append("senderId", localstorageId);

//     // const response = await axios.post(
//     //   "http://localhost:2000/api/posts/reel",
//     //   reelData,
//     //   { withCredentials: true },
//     //   {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //     },
//     //   }
//     // );
//     try {
//       const response = await fetch("http://localhost:2000/api/posts/reel", {
//         method: "POST",
//         body: reelData,
//         // enctype: "multipart/form-data"
//       });
//       alert("File uploaded successfully!");
//       window.location.href = "/";
//       console.log(response);
//     } catch {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   return (
//     isMounted && (


//  <div>
//       <form onSubmit={HandleSubmitReel} className="SubmitPostUi" id="SubmitPostUi">
//         {/* <div id="close">Close</div> */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="70"
//           height="70"
//           fill="currentColor"
//           className="bi bi-stickies-fill"
//           viewBox="0 0 16 16"
//         >
//           <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5" />
//           <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z" />
//         </svg>
//         <div>
//           {/* <label>Photo:</label> */}
//           <input
//             type="file"
//             name="reel"
//             id="reel"
//             onChange={(e) => setreel(e.target.files[0])}
//           />
//         </div>

//         <div>
//           {/* <label>Message:</label> */}
//           <input type="text" onChange={(e) => setmessage(e.target.value)} />
//         </div>

//         <button type="submit">Upload</button>
//       </form>
//     </div>







//     )
//   );
// }

// export default PostReel;

// import React, { useState, useEffect, useRef } from "react";
// import "./Aditionalcss.css";

// function PostReel({ reelvalue }) {
//   const [isVisible, setIsVisible] = useState(reelvalue);
//   const [isMounted, setIsMounted] = useState(false);
//   const formRef = useRef(null); // To reference the form container

//   useEffect(() => {
//     if (reelvalue) {
//       setIsMounted(true);
//       setTimeout(() => setIsVisible(true), 10); // Slight delay for smooth transition
//     } else {
//       setIsVisible(false);
//       setTimeout(() => setIsMounted(false), 300); // Wait for transition to complete before unmounting
//     }
//   }, [reelvalue]);

//   const handleClickOutside = (event) => {
//     if (formRef.current && !formRef.current.contains(event.target)) {
//       setIsVisible(false); // Hide form on outside click
//       setTimeout(() => setIsMounted(false), 300); // Optional: delay for smooth unmount
//     }
//   };

//   useEffect(() => {
//     if (isVisible) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isVisible]);

//   const [reel, setReel] = useState(null);
//   const [message, setMessage] = useState("");

//   const localstorageId = localStorage.getItem("Chat-authUser");

//   const handleSubmitReel = async (e) => {
//     e.preventDefault();
//     const reelData = new FormData();
//     reelData.append("postReel", reel);
//     reelData.append("postMessage", message);
//     reelData.append("senderId", localstorageId);

//     try {
//       const response = await fetch("http://localhost:2000/api/posts/reel", {
//         method: "POST",
//         body: reelData,
//       });
//       alert("File uploaded successfully!");
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   return (
//     isMounted && (
//       <div>
//         <form
//           onSubmit={handleSubmitReel}
//           className={`SubmitPostUi ${isVisible ? "visible" : "hidden"}`}
//           id="SubmitPostUi"
//           ref={formRef} // Reference the form container
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="70"
//             height="70"
//             fill="currentColor"
//             className="bi bi-stickies-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5" />
//             <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z" />
//           </svg>
//           <div>
//             <input
//               type="file"
//               name="reel"
//               id="reel"
//               onChange={(e) => setReel(e.target.files[0])}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//     )
//   );
// }

// export default PostReel;

// import React, { useState, useEffect, useRef } from "react";
// import "./Aditionalcss.css";

// function PostReel({ reelvalue }) {
//   const [isVisible, setIsVisible] = useState(reelvalue); // Controlled by reelvalue prop
//   const formRef = useRef(null); // To reference the form container

//   useEffect(() => {
//     setIsVisible(reelvalue); // Update visibility when reelvalue changes
//   }, [reelvalue]);

//   const handleClickOutside = (event) => {
//     if (formRef.current && !formRef.current.contains(event.target)) {
//       setIsVisible(false); // Hide form on outside click
//     }
//   };

//   useEffect(() => {
//     if (isVisible) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isVisible]);

//   const [reel, setReel] = useState(null);
//   const [message, setMessage] = useState("");

//   const localstorageId = localStorage.getItem("Chat-authUser");

//   const handleSubmitReel = async (e) => {
//     e.preventDefault();
//     const reelData = new FormData();
//     reelData.append("postReel", reel);
//     reelData.append("postMessage", message);
//     reelData.append("senderId", localstorageId);

//     try {
//       const response = await fetch("http://localhost:2000/api/posts/reel", {
//         method: "POST",
//         body: reelData,
//       });
//       alert("File uploaded successfully!");
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   return (
//     isVisible && (
//       <div>
//         <form
//           onSubmit={handleSubmitReel}
//           className="SubmitPostUi"
//           id="SubmitPostUi"
//           ref={formRef} // Reference the form container
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="70"
//             height="70"
//             fill="currentColor"
//             className="bi bi-stickies-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5" />
//             <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z" />
//           </svg>
//           <div>
//             <input
//               type="file"
//               name="reel"
//               id="reel"
//               onChange={(e) => setReel(e.target.files[0])}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//     )
//   );
// }

// export default PostReel;


import React, { useState, useEffect, useRef } from "react";
import "./Aditionalcss.css";

function PostReel({ reelvalue }) {
  const [isVisible, setIsVisible] = useState(reelvalue); // Controlled visibility
  const formRef = useRef(null); // Reference to form container

  // Sync visibility with the `reelvalue` prop
  useEffect(() => {
    setIsVisible(reelvalue);
  }, [reelvalue]);

  // Handle clicks outside the form
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsVisible(false); // Hide the form
    }
  };

  // Add and clean up event listener for outside clicks
  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const [reel, setReel] = useState(null);
  const [message, setMessage] = useState("");

  const localstorageId = localStorage.getItem("Chat-authUser");

  const handleSubmitReel = async (e) => {
    e.preventDefault();
    const reelData = new FormData();
    reelData.append("postReel", reel);
    reelData.append("postMessage", message);
    reelData.append("senderId", localstorageId);

    try {
      const response = await fetch("http://localhost:2000/api/posts/reel", {
        method: "POST",
        body: reelData,
      });
      alert("File uploaded successfully!");
      window.location.href = "/";
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      {/** Form Visibility based on `isVisible` */}
      {isVisible && (
        <form
          onSubmit={handleSubmitReel}
          className="SubmitPostUi"
          id="SubmitPostUi"
          ref={formRef} // Reference the form container
        >
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
          <h3 style={{color:"black",  textAlign:"center"}} >Select or Drag video , reel here</h3>
          <div>
            <input
              type="file"
              name="reel"
              id="reel"
              onChange={(e) => setReel(e.target.files[0])}
            />
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      )}
    </div>
  );
}

export default PostReel;
