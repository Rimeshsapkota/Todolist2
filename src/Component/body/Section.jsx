import "./Section.css"
import React from "react";
const { useState } = React;
const AddTaskForm = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value)
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Enter a title for this task…"
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit"><i class="fa fa-plus"></i></button>
        </form>
    );
}

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = text => setTasks([...tasks, { text }]);
    
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-list">
            {tasks.map((task, index) => (
                <div className="todo">
                    <span >
                        {task.text}
                    </span>
                    <button onClick={() => removeTask(index)}><i class="fa fa-trash-o"></i></button>
                </div>
            ))}
            <AddTaskForm addTask={addTask} />
        </div>
    );
}

// ReactDOM.render(<ToDoList />, document.getElementById('App'));
export { ToDoList };