import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Data from DB
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Single task from DB
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add new Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };

    // setTasks([...tasks, newTask]);
  };

  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <>
        <div className="grid content-center justify-center h-screen bg-base-200">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      {showAddTask && <AddTask onAdd={addTask} />}
                      {tasks.length > 0 ? (
                        <Tasks
                          onToggle={toggleReminder}
                          onDelete={deleteTask}
                          tasks={tasks}
                        />
                      ) : (
                        "No Tasks to Show"
                      )}
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
