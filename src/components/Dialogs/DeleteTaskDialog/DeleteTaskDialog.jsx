import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";

import { useDebounce } from "hooks/useDebounce";

const DeleteTaskDialog = ({ isOpen, onClose, onSubmit, task }) => {
  const debouncedText = useDebounce(task?.text, 500);

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete following task?</DialogTitle>
      <DialogContent>{isOpen ? task?.text : debouncedText}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={handleSubmit}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTaskDialog;
