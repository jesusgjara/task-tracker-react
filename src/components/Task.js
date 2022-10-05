const Task = ({ task }) => {
    return (
        <div className="w-full py-2 px-2 font-mplus bg-blue-700">
            <h3 className="font-semibold">{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task