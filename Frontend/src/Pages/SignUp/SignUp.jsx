import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [fullname, setfullname] = useState([]);
  const [username, setusername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);
  const [gender, setGender] = useState([]);



  const handleGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const GetUsers = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          "http://localhost:2000/api/auth/signup",
          {
            fullname,
            username,
            password,
            confirmPassword,
            gender,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data);
          // SetAuthUser(response);
          if ((response.status === 201, 200)) {
            console.log(response.status);
            alert("User Signup Successful");
            localStorage.setItem("Chat-authUser", response.data);

            // localStorage.setItem("Chat-authUser",response.data.token);
            if (localStorage.getItem("Chat-authUser")) {
              window.location.href = "/";
            }
          }
        });
    } catch (error) {
      alert(error);
      // console.log(gender)
    }
  };

  return (
    <div className="AllSignin">
      <div className="SignupPage">
        <h2 className="SignupText">Sign Up</h2>
        <form onSubmit={GetUsers}>
          <label htmlFor="text">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          <label htmlFor="text">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="GenderCheck">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="male"
                id="male"
                checked={gender === "male"}
                value="male"
                onChange={handleGender}
                // onChange={
                //   checked ? setGender("male") : setGender("female")
                // }
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="female"
                id="female"
                checked={gender === "female"}
                value="female"
                onChange={handleGender}
                // onChange={checked ? setGender("male") : setGender("female")
                // }
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
          <p>
            <Link to="/">Don't have an account?</Link>
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
