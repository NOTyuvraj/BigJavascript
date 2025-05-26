import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const [text, setText] = useState("");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="todo-list">
      <div className="todo-input-div">
        <input
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="todo-add" onClick={() => addTask(text)}>
          +
        </button>
      </div>

      <div className="todo-base">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </div>
  );
};
