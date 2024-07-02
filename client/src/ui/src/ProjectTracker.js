import React, { useEffect, useState } from "react";
import Circle from "./components/Circle";
import NewGoal from "./components/NewGoal";
import TodoList from "./components/TodoList";
import InProgressList from "./components/InProgressList";
import CompletedList from "./components/CompletedList";
import Header from "./components/Header";
import styles from "./components/App.module.css";

import { useParams } from "react-router-dom";

export default function ProjectTracker() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);


  const{pid} = useParams();
  console.log(pid)

  useEffect(() => {

    if(localStorage.getItem("project") !== pid){
      // localStorage.setItem("project", pid)
      alert("You are not authorized to view this project")
      window.location.href = "/"
    }

  },[])


  // console.log();

  const addTask = (newTask, status) => {
    newTask.id = Math.random().toString();
    switch (status) {
      case "todo":
        setTodoTasks([...todoTasks, newTask]);
        break;
      case "inProgress":
        setInProgressTasks([...inProgressTasks, newTask]);
        break;
      case "completed":
        setCompletedTasks([...completedTasks, newTask]);
        break;
      default:
        break;
    }
  };

  const moveTask = (taskId, sourceStatus, targetStatus) => {
    let taskToMove;
    switch (sourceStatus) {
      case "todo":
        taskToMove = todoTasks.find((task) => task.id === taskId);
        setTodoTasks(todoTasks.filter((task) => task.id !== taskId));
        break;
      case "inProgress":
        taskToMove = inProgressTasks.find((task) => task.id === taskId);
        setInProgressTasks(
          inProgressTasks.filter((task) => task.id !== taskId)
        );
        break;
      case "completed":
        taskToMove = completedTasks.find((task) => task.id === taskId);
        setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
        break;
      default:
        break;
    }
    switch (targetStatus) {
      case "todo":
        setTodoTasks([...todoTasks, taskToMove]);
        break;
      case "inProgress":
        setInProgressTasks([...inProgressTasks, taskToMove]);
        break;
      case "completed":
        setCompletedTasks([...completedTasks, taskToMove]);
        break;
      default:
        break;
    }
  };

  const deleteTask = (taskId, sourceStatus) => {
    switch (sourceStatus) {
      case "todo":
        setTodoTasks(todoTasks.filter((task) => task.id !== taskId));
        break;
      case "inProgress":
        setInProgressTasks(
          inProgressTasks.filter((task) => task.id !== taskId)
        );
        break;
      case "completed":
        setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
        break;
      default:
        break;
    }
  };

  const totalTasks =
    todoTasks.length + inProgressTasks.length + completedTasks.length;
  const completedPercentage = totalTasks
    ? Math.round((completedTasks.length / totalTasks) * 100)
    : 0;

  const handleHomeClick = () => {
    console.log("Home Page clicked");
  };

  const handleChangeProjectClick = () => {
    console.log("Change Project clicked");
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
  };

  return (
    <div>
     

      <div className="App" style={{marginTop: "30px",display: "flex"}}>
        <div className={styles["leftitems"]}>
          <h1 style={{ color : "white"}}>
            Task Manager
          </h1>
          <NewGoal onAdd={addTask} />
          <div className={styles["progress-circle-container"]}>
            <Circle percentage={completedPercentage} />
            <div className={styles["stats"]}>
              <p style={{color:"white"}}>
                {completedTasks.length} of {totalTasks} completed successfully
              </p>
            </div>
          </div>
        </div>
        <div className={styles["rightitems"]}>
          <div style={{ display: "inline-flex" }} className={styles["lists-container"]}>
            <TodoList
              tasks={todoTasks}
              onMove={moveTask}
              onDelete={deleteTask}
            />
            <InProgressList
              tasks={inProgressTasks}
              onMove={moveTask}
              onDelete={deleteTask}
            />
            <CompletedList
              tasks={completedTasks}
              onMove={moveTask}
              onDelete={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
