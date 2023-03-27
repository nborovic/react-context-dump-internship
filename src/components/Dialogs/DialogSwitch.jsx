import { useDialog } from "providers/DialogProvider";
import { DIALOG } from "providers/DialogProvider";

import CreateTaskDialog from "./CreateTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";

const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();

  return (
    <>
      <CreateTaskDialog
        isOpen={activeDialog === DIALOG.CREATE_TASK_DIALOG}
        onClose={close}
        {...additionalProps}
      />
      <DeleteTaskDialog
        isOpen={activeDialog === DIALOG.DELETE_TASK_DIALOG}
        onClose={close}
        {...additionalProps}
      />
    </>
  );
};

export default DialogSwitch;
