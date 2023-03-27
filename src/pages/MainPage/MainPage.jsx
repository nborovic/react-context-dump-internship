import DialogSwitch from "components/Dialogs";
import ThemeButton from "components/ThemeButton";
import TodoList from "components/TodoList";

import classes from "./index.module.css";

const MainPage = () => {
  return (
    <main className={classes.main}>
      <TodoList />
      <ThemeButton />
      <DialogSwitch />
    </main>
  );
};

export default MainPage;
