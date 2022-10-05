import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to the barber",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Eat pizza",
      day: "Feb 7th at 2:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Eat hamburguer",
      day: "Feb 8th at 2:30pm",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    console.log(task)
  }

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => { 
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder, } : task)
    );
  };


  return (
    <div className="grid content-center justify-center h-screen">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <Header />
          <AddTask onAdd={addTask}/>
          {tasks.length > 0 ? (
            <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks} />
          ) : (
            "No Tasks to Show"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
