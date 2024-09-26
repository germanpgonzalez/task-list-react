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


  return (
    <>
      <h1>Task List App 🌍</h1>
      <TaskForm/>
      <TaskList data={data}/>
    </>
  )
}

export default App;
