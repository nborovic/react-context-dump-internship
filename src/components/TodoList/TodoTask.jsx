import { useState } from "react";
import {
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

import { DIALOG, useDialog } from "providers/DialogProvider";

const TodoTask = ({ task, deleteTaskHandler }) => {
  const { open } = useDialog();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDeleteClick = () => {
    open(DIALOG.DELETE_TASK_DIALOG, {
      onSubmit: () => deleteTaskHandler(task.id),
      task,
    });
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding>
      <ListItemButton onClick={() => setIsCompleted(!isCompleted)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isCompleted}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={task.text} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoTask;
