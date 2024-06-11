import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isloggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
        setIsLoggedIn(true)
        navigate("/")
    }
}, [isloggedIn,navigate]);

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5555/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data);
        window.location.reload();
    } else {
        const data = await response.json();
        alert(data.message);
    }

    console.log(username, password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <table>
        <tr>
          <td>
            <label htmlFor="">Username</label>
          </td>
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
          <td>
            <label htmlFor="">Password</label>
          </td>
          <td>
            {/* <input type="text" /> */}
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
          <td rowSpan={2}>
            <button onClick={handleSubmit} disabled={isloggedIn}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Login;
