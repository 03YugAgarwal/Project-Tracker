import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch("http://localhost:5555/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });

    if (response.status === 200) {
      alert("Account created Successfully!");
      navigate("/login");
    } else {
      const data = await response.json();
      alert(data.message);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Hello, Please Signin:</h1>
        <p>Enter your details to create a new account</p>
        <div className={styles.form}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={handleSignup}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
