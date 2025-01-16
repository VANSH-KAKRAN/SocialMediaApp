import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigation, useNavigate, Link } from "react-router-dom";

function Login() {
  // const [setAuthUser] = useAuthContext();
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  // console.log(setAuthUser)
  // console.log(username, password);

  const HandleLogin = async (e) => {
    try {
      e.preventDefault();
      if (username.length === 0 || password.length === 0) {
        alert("Please enter your username and password currently");
      } else {
        axios
          .post(
            "http://localhost:2000/api/auth/login",
            {
              username,
              password,
            },
            { withCredentials: true }
          )
          .then((response) => {
            if ((response.status === 200, 201)) {
              console.log(response.status);
              console.log(response);
              // setAuthUser(response.data);

              localStorage.setItem("Chat-authUser", response.data);
              if (localStorage.getItem("Chat-authUser", response)) {
               
                window.location.href = "/";
              }
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="AllLogin">
      <div className="LoginPage">
        <h2 className="Logintext">Login</h2>
        <form onSubmit={HandleLogin}>
          <label htmlFor="text">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <Link to="/signup">Don't have an account? </Link>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
