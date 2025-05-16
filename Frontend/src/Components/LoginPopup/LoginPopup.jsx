import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
const [role, setRole] = useState("User");

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    fullName: "",
    mobileNumber: "",
    registrationNo: "",
    contactNumber: "",
    location: "",
    role: "User",
    skills: [],
  });

  const skillOptions = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "C++",
  ];

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSkillsChange = (event) => {
    const options = event.target.options;
    const selectedSkills = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSkills.push(options[i].value);
      }
    }
    setData((data) => ({ ...data, skills: selectedSkills }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const endpoint =
      currState === "Login"
        ? "/api/registration/login"
        : "/api/registration/register";
    const newUrl = url + endpoint;

    const payload =
      currState === "Login"
        ? { email: data.email, password: data.password, role: data.role }
        : {
            fullName: data.fullName,
            mobileNumber: data.mobileNumber,
            email: data.email,
            password: data.password,
            registrationNo: data.registrationNo,
            location: data.location,
            role: data.role,
            skills: data.skills,
          };

    try {
      const response = await axios.post(newUrl, payload);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        toast.success(
          currState === "Login"
            ? "User logged in successfully"
            : "User registered successfully"
        );
        setShowLogin(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <i
            className="fa-solid fa-xmark close-icon"
            onClick={() => setShowLogin(false)}
            title="Close"
            style={{ cursor: "pointer" }}
          ></i>
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <>
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Your email"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Password"
                required
              />

              <div className="login-popup-role">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="User"
                    checked={data.role === "User"}
                    onChange={onChangeHandler}
                  />
                  User
                </label>
                <label style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    checked={data.role === "Admin"}
                    onChange={onChangeHandler}
                  />
                  Admin
                </label>
              </div>
            </>
          ) : (
            <>
              <input
                name="fullName"
                onChange={onChangeHandler}
                value={data.fullName}
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                name="mobileNumber"
                onChange={onChangeHandler}
                value={data.mobileNumber}
                type="text"
                placeholder="Mobile Number"
                required
              />
              <input
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                placeholder="Email ID"
                required
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder="Create Password"
                required
              />
              <input
                name="registrationNo"
                onChange={onChangeHandler}
                value={data.registrationNo}
                type="text"
                placeholder="Registration No."
                required
              />
              <input
                name="location"
                onChange={onChangeHandler}
                value={data.location}
                type="text"
                placeholder="Location"
                required
              />

              <div className="login-popup-role">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="User"
                    checked={data.role === "User"}
                    onChange={onChangeHandler}
                  />
                  User
                </label>
                <label style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    checked={data.role === "Admin"}
                    onChange={onChangeHandler}
                  />
                  Admin
                </label>
              </div>

              <label htmlFor="skills">
                Select Skills (Ctrl + click for multiple):
              </label>
              <select
                name="skills"
                id="skills"
                multiple
                value={data.skills}
                onChange={onSkillsChange}
                required
                style={{ height: "100px" }}
              >
                {skillOptions.map((skill) => (
                  <option key={skill} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, I Agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrState("Sign Up");
                // Reset form data
                setData({
                  name: "",
                  email: "",
                  password: "",
                  fullName: "",
                  mobileNumber: "",
                  registrationNo: "",
                  location: "",
                  role: "User",
                  skills: [],
                });
              }}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Click here
            </span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrState("Login");
                setData({
                  name: "",
                  email: "",
                  password: "",
                  fullName: "",
                  mobileNumber: "",
                  registrationNo: "",
                  location: "",
                  role: "User",
                  skills: [],
                });
              }}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
