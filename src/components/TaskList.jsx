import { TaskCard } from "../components/TaskCard";

export const TaskList = ({ data }) => {
  return (
    <>
      {data.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </>
  );
};
