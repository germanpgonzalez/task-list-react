import { useState } from 'react';
import { useEffect } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

import { db } from './data/db';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(db);
  },[])

  const createTask = ({title, description}) => {
    setData([...data, {
      title,
      description,
      id: data.length
    }])
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
