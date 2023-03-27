import { Button, List, TextField } from "@mui/material";
import { useState } from "react";
import clsx from "clsx";

import { useTheme } from "providers/ThemeProvider";
import { DIALOG, useDialog } from "providers/DialogProvider";

import TodoTask from "./TodoTask";
import classes from "./index.module.css";

const TodoList = () => {
  const { open } = useDialog();
  const { isDarkMode } = useTheme();
  const [inputTaskText, setInputTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddClick = () => {
    open(DIALOG.CREATE_TASK_DIALOG, { onSubmit: handleAddTask });
  };

  const handleAddTask = () => {
    const maxId = tasks.reduce(
      (acc, curr) => (curr.id > acc ? curr.id : acc),
      0
    );
    setTasks([...tasks, { id: maxId + 1, text: inputTaskText }]);
    setInputTaskText("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks((currentTasks) => {
      const clonedTasks = JSON.parse(JSON.stringify(currentTasks));
      const taskIndex = clonedTasks.findIndex((task) => task.id === taskId);
      clonedTasks.splice(taskIndex, 1);
      return clonedTasks;
    });
  };

  return (
    <div
      className={clsx(classes.todoWrapper, {
        [classes["todoWrapper--dark"]]: isDarkMode,
      })}>
      <div className={classes.inputWrapper}>
        <TextField
          className={classes.input}
          value={inputTaskText}
          onChange={(event) => setInputTaskText(event.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleAddClick}
          disabled={inputTaskText === ""}>
          ADD
        </Button>
      </div>
      <List className={classes.taskList}>
        {tasks.map((task) => (
          <TodoTask
            key={task.id}
            task={task}
            deleteTaskHandler={handleDeleteTask}
          />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
