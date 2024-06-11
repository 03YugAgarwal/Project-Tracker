import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  const handleSignup = async () =>{
    const response = await fetch('http://localhost:5555/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
    });

    if (response.status === 200) {
        alert("Account created Successfully!")
        navigate("/login")
    } else {
        const data = await response.json();
        alert(data.message);
    }
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <table>
        <tr>
          <td>Email</td>
          <td>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Username</td>
          <td>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
            <td rowSpan="2">
                <button onClick={handleSignup}>Submit</button>
            </td>
        </tr>
      </table>
    </div>
  );
};

export default Signup;
