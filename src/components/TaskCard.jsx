
export const TaskCard = ({ task }) => {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <hr />
    </div>
  );
};
