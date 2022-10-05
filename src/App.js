import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "Doctors appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: "Go to the barber",
            day: "Feb 6th at 2:30pm",
            reminder: true
        },
        {
            id: 3,
            text: "Eat pizza",
            day: "Feb 7th at 2:30pm",
            reminder: true
        },
        {
            id: 4,
            text: "Eat hamburguer",
            day: "Feb 8th at 2:30pm",
            reminder: true
        },
    ]
)

  return (
    <div className="grid content-center justify-center h-screen">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <Header />
          <Tasks tasks={tasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
