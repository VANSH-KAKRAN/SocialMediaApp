import React from "react";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PostMain from "./Pages/PostsData/PostMain";
// import AppRouter from "./Pages/Router/AppRouter";
import AsideRoutes from "./Pages/Router/AsideRoutes";
import CreatePost from "./Pages/AditionalComponents/CreatePost";
import Profile from "./Pages/AditionalComponents/Profile";
import SearchRoute from "./Pages/AditionalComponents/SearchRoute";
import ReelPage from "./Pages/Reels/ReelPage";
import PostReel from "./Pages/AditionalComponents/PostReel";
import Explore from "./Pages/Explore/Explore";

function App() {
  const authUser = localStorage.getItem("Chat-authUser");
  console.log("authuser", authUser);

  return (
    <div className="theWholeApp">
      {authUser && <AsideRoutes />}

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

        {/* <Route
          path="/search"
          element={authUser ? <SearchRoute /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/reels"
          element={authUser ? <ReelPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}
export default App;
