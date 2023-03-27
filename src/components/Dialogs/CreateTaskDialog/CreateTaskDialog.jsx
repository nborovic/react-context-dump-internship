import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const CreateTaskDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Are you sure you want to create task?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={handleSubmit}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTaskDialog;
