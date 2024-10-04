import { useState } from 'react';
import { useEffect } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('taskList'));

    if(tasks.length > 0) {
      setData(tasks)
    }

  },[]);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(data));
  },[data]);

  const createTask = ({title, description}) => {
    setData([...data, {
      title,
      description,
      id: data.length
    }]);
    
  }

  const deleteTask = (idTask) => {
    const newData = data.filter((task) => task.id !== idTask);
    setData(newData);
  }

  


  return (
    <>
      <h1>Task List App 📋</h1>
      <TaskForm createTask={createTask}/>
      <TaskList data={data} deleteTask={deleteTask}/>
    </>
  )
}

export default App;
