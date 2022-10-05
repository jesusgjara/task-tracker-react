import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`w-full py-2 px-2 font-mplus bg-blue-700 ${task.reminder ? 'border-l-4 border-l-green-500' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3 className="font-semibold flex justify-between">
        {task.text}{" "}
        <FaTimes onClick={() => onDelete(task.id)} className=" text-red-800 self-center hover:cursor-pointer" />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
