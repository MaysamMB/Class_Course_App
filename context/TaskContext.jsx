import { createContext } from "react";

const TaskContext = createContext({
    tasks: [],
    addTask: () => {},
    clearTask: () => {},
});

export default TaskContext