import { TaskCard } from "../components/TaskCard";

export const TaskList = ({ data }) => {
  return (
    <>
      {data.length === 0 ? <h1>No hay tareas disponibles</h1> :
        data.map((task) => {
          return <TaskCard task={task} key={task.id} />
        })
      }
    </>
  );
};
