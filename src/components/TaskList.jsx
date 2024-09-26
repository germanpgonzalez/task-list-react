import { TaskCard } from "../components/TaskCard";

export const TaskList = ({ data }) => {
  return (
    <>
      <h1>Task List 😯</h1>
      {data.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </>
  );
};
