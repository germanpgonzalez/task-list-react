import { TaskCard } from "../components/TaskCard";

export const TaskList = ({ data, deleteTask }) => {

  // const data = JSON.parse(localStorage.getItem('taskList'));

  return (
    <>
      {data.length === 0 ? <h3>No hay tareas disponibles</h3> :
        data.map((task) => {
          return <TaskCard task={task} key={task.id} deleteTask={deleteTask} />
        })
      }
    </>
  );
};
