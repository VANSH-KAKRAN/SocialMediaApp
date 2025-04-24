// // import React from "react";
// // import Login from "./Pages/Login/Login";
// // import SignUp from "./Pages/SignUp/SignUp";
// // import { Navigate, Route, Router, Routes } from "react-router-dom";
// // import Home from "./Pages/Home/Home";
// // import PostMain from "./Pages/PostsData/PostMain";
// // // import AppRouter from "./Pages/Router/AppRouter";
// // import AsideRoutes from "./Pages/Router/AsideRoutes";
// // import CreatePost from "./Pages/AditionalComponents/CreatePost";
// // import Profile from "./Pages/AditionalComponents/Profile";
// // import SearchRoute from "./Pages/AditionalComponents/SearchRoute";
// // import ReelPage from "./Pages/Reels/ReelPage";
// // import PostReel from "./Pages/AditionalComponents/PostReel";
// // import Explore from "./Pages/Explore/Explore";
// // // import "./index.css";
// // import { useState, useEffect } from "react";
// // function App() {
// //   const authUser = localStorage.getItem("Chat-authUser");
// //   console.log("authuser", authUser);

// //   return (
// //     <div className="theWholeApp">
// //       {authUser && <AsideRoutes />}

// //       <Routes>
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<SignUp />} />
// //         <Route
// //           path="/"
// //           element={authUser ? <PostMain /> : <Navigate to="/login" />}
// //         />

// //         <Route
// //           path="/messages"
// //           element={authUser ? <Home /> : <Navigate to="/login" />}
// //         />

// //         <Route
// //           path="/createpost"
// //           element={authUser ? <CreatePost /> : <Navigate to="/login" />}
// //         />

// //         <Route
// //           path="/createreel"
// //           element={authUser ? <PostReel /> : <Navigate to="/login" />}
// //         />
// //         <Route
// //           path="/explore"
// //           element={authUser ? <Explore /> : <Navigate to="/login" />}
// //         />

// //         {/* <Route
// //           path="/search"
// //           element={authUser ? <SearchRoute /> : <Navigate to="/login" />}
// //         /> */}
// //         <Route
// //           path="/reels"
// //           element={authUser ? <ReelPage /> : <Navigate to="/login" />}
// //         />
// //       </Routes>
// //     </div>
// //   );
// // }
// // export default App;

// import React, { useState, useEffect } from "react";
// import Login from "./Pages/Login/Login";
// import SignUp from "./Pages/SignUp/SignUp";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import PostMain from "./Pages/PostsData/PostMain";
// import AsideRoutes from "./Pages/Router/AsideRoutes";
// import CreatePost from "./Pages/AditionalComponents/CreatePost";
// import Profile from "./Pages/AditionalComponents/Profile";
// import Explore from "./Pages/Explore/Explore";
// import PostReel from "./Pages/AditionalComponents/PostReel";
// import ReelPage from "./Pages/Reels/ReelPage";
// // import React from "react";
// // import Login from "./Pages/Login/Login";
// // import SignUp from "./Pages/SignUp/SignUp";
// // import { Navigate, Route, Router, Routes } from "react-router-dom";
// // import Home from "./Pages/Home/Home";
// // import PostMain from "./Pages/PostsData/PostMain";
// // // import AppRouter from "./Pages/Router/AppRouter";
// // import AsideRoutes from "./Pages/Router/AsideRoutes";
// // import CreatePost from "./Pages/AditionalComponents/CreatePost";
// // import Profile from "./Pages/AditionalComponents/Profile";
// // import SearchRoute from "./Pages/AditionalComponents/SearchRoute";
// // import PostReel from "./Pages/AditionalComponents/PostReel";
// // import Explore from "./Pages/Explore/Explore";

// function App() {
//   const [isCssEnabled, setIsCssEnabled] = useState(true);
//   const authUser = localStorage.getItem("Chat-authUser");

//   // Dynamically add or remove the CSS file
//   // useEffect(() => {
//   //   const link = document.getElementById("dynamic-css");

//   //   if (isCssEnabled) {
//   //     if (!link) {
//   //       const linkTag = document.createElement("link");
//   //       linkTag.id = "dynamic-css";
//   //       linkTag.rel = "stylesheet";
//   //       linkTag.href = "./index.css"; // Path to your CSS file
//   //       document.head.appendChild(linkTag);
//   //     }
//   //   } else {
//   //     if (link) {
//   //       document.head.removeChild(link);
//   //     }
//   //   }
//   // }, [isCssEnabled]);
//   useEffect(() => {
//     const link = document.getElementById("dynamic-css");

//     if (isCssEnabled) {
//       console.log("Adding CSS...");
//       if (!link) {
//         const linkTag = document.createElement("link");
//         linkTag.id = "dynamic-css";
//         linkTag.rel = "stylesheet";
//         linkTag.href = "/index.css"; // Ensure this is the correct path
//         document.head.appendChild(linkTag);
//       }
//     } else {
//       console.log("Removing CSS...");
//       if (link) {
//         document.head.removeChild(link);
//       }
//     }
//   }, [isCssEnabled]);

//   // Toggle CSS on/off
//   const toggleCss = () => {
//     console.log("Toggle CSS clicked");
//     setIsCssEnabled((prev) => !prev);
//   };

//   return (
//     <div className="theWholeApp">
//       {authUser && <AsideRoutes toggleCss={toggleCss} />}{" "}
//       {/* Pass toggleCss to AsideRoutes */}
//       {/* <Routes>
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route
//           path="/"
//           element={authUser ? <PostMain /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/messages"
//           element={authUser ? <Home /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/createpost"
//           element={authUser ? <CreatePost /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/createreel"
//           element={authUser ? <PostReel /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/explore"
//           element={authUser ? <Explore /> : <Navigate to="/login" />}
//         />
//       </Routes> */}
//       <Routes>
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route
//           path="/"
//           element={authUser ? <PostMain /> : <Navigate to="/login" />}
//         />

//         <Route
//           path="/messages"
//           element={authUser ? <Home /> : <Navigate to="/login" />}
//         />

//         <Route
//           path="/createpost"
//           element={authUser ? <CreatePost /> : <Navigate to="/login" />}
//         />

//         <Route
//           path="/createreel"
//           element={authUser ? <PostReel /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/explore"
//           element={authUser ? <Explore /> : <Navigate to="/login" />}
//         />

//         {/* <Route
//           path="/search"
//           element={authUser ? <SearchRoute /> : <Navigate to="/login" />}
//         /> */}
//         <Route
//           path="/reels"
//           element={authUser ? <ReelPage /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PostMain from "./Pages/PostsData/PostMain";
import AsideRoutes from "./Pages/Router/AsideRoutes";
import CreatePost from "./Pages/AditionalComponents/CreatePost";
import Profile from "./Pages/AditionalComponents/Profile";
import Explore from "./Pages/Explore/Explore";
import PostReel from "./Pages/AditionalComponents/PostReel";
import ReelPage from "./Pages/Reels/ReelPage";

function App() {
  const [isCssEnabled, setIsCssEnabled] = useState(true);
  const authUser = localStorage.getItem("Chat-authUser");

  useEffect(() => {
    const linkId = "dynamic-css";
    let link = document.getElementById(linkId);

    if (isCssEnabled) {
      console.log("✅ Enabling CSS...");
      if (!link) {
        link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        link.href = "/Index.css"; // Ensure this path is correct
        document.head.appendChild(link);
      }
    } else {
      console.log("❌ Disabling CSS...");
      if (link) {
        link.remove();
      }
    }
  }, [isCssEnabled]);

  const toggleCss = () => {
    setIsCssEnabled((prev) => !prev);
  };

  return (
    <div className="theWholeApp">
      {authUser && <AsideRoutes toggleCss={toggleCss} />}

      {/* <button onClick={toggleCss} style={{ margin: "10px", padding: "5px" }}>
        {isCssEnabled ? "Disable CSS" : "Enable CSS"}
      </button> */}

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={authUser ? <PostMain /> : <Navigate to="/login" />}
        />
        <Route
          path="/messages"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/createpost"
          element={authUser ? <CreatePost /> : <Navigate to="/login" />}
        />
        <Route
          path="/createreel"
          element={authUser ? <PostReel /> : <Navigate to="/login" />}
        />
        <Route
          path="/explore"
          element={authUser ? <Explore /> : <Navigate to="/login" />}
        />
        <Route
          path="/reels"
          element={authUser ? <ReelPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
