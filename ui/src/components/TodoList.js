import React, { useState, useEffect } from "react";

const TodoList = ({ tasks, onMove, onDelete }) => {
  const [colors, setColors] = useState({});
  const [clickedGoals, setClickedGoals] = useState({});

  useEffect(() => {
    const initialColors = tasks.reduce((acc, task) => {
      acc[task.id] = getRandomColor();
      return acc;
    }, {});
    setColors(initialColors);
  }, [tasks]);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const clickCheck = (id) => {
    setClickedGoals((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const moveTaskHandler = (taskId, targetStatus) => {
    onMove(taskId, "todo", targetStatus);
  };

  const deleteTaskHandler = (taskId) => {
    onDelete(taskId, "todo");
  };

  return (
    <div className="goal-list todo">
      <div style={{ backgroundColor: "yellow", borderRadius: "5px" }}>
        <h2>To-Do</h2>
      </div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="goal-item"
          style={{ borderLeftColor: "yellow", position: "relative" }}
        >
          <button
            onClick={() => deleteTaskHandler(task.id)}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              background: "none",
              border: "none",
              color: "back",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            X
          </button>
          <h3
            onClick={() => clickCheck(task.id)}
            style={{ textAlignLast: "left" }}
          >
            {task.text}
          </h3>
          <p>{task.body}</p>
          <div className="button-container">
            <button
              onClick={() => moveTaskHandler(task.id, "inProgress")}
            ></button>
            <button
              onClick={() => moveTaskHandler(task.id, "completed")}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
