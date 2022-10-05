import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Add new Task");
      return;
    }

    onAdd = { text, day, reminder };

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control w-full max-w-xs">
        <label className="pl-0 label">
          <span className="text-lg font-bold font-mplus">Task</span>
        </label>
        <input
          type="text"
          placeholder="Add Task"
          className="input input-bordered w-full max-w-xs font-mplus text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="pl-0 label">
          <span className="text-lg font-bold font-mplus">Day & Time</span>
        </label>
        <input
          type="text"
          placeholder="Add Day & Time"
          className="input input-bordered w-full max-w-xs font-mplus text-black"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="pl-0 py-2 flex justify-between cursor-pointer">
          <span className="text-lg font-bold font-mplus">Set Reminder</span>
          <input
            type="checkbox"
            checked={reminder}
            className="bg-blue-900 checkbox checkbox-primary self-center"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </label>
      </div>
      <input
        type="submit"
        className="pt-1 w-full btn font-mplus normal-case bg-blue-900 hover:bg-blue-500"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
