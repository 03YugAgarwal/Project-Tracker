import React, { useState } from 'react';
import axios from 'axios';
import './ProjectGenerator.css'; // Ensure your CSS file path is correct

const ProjectLogin = () => {
  const [projectId, setProjectId] = useState('');
  const [projectPassword, setProjectPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-backend-url.com/login', {
        id: projectId,
        password: projectPassword
      });
      alert('Login successful!');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed.');
    }
  };

  return (
    <div className="project-generator">
      <h2>Login to Existing Project</h2>
      <input
        type="text"
        placeholder="Enter Project ID..."
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Project Password..."
        value={projectPassword}
        onChange={(e) => setProjectPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default ProjectLogin;
