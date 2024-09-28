import { RiDeleteBinLine } from "react-icons/ri";

export const TaskCard = ({ task, deleteTask }) => {
  return (
    <>
      <div className="taskTitle">
        <h4>{task.title}</h4>
      </div>
      <div className="taskDescription">
        <p>{task.description}</p>
      </div>
      <RiDeleteBinLine className="deleteButton" onClick={() => deleteTask(task.id)}/>
    </>
  );
};
