import { useState } from "react";


export const TaskForm = ({setData, data}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
       e.preventDefault();

       setData([...data,{
        id: data.length,
        title,
        description
       }]);
       
       setTitle('');
       setDescription('');
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <form>

            <input 
                type="text" 
                placeholder="Ingrese una tarea" 
                onChange={(e) => handleTitle(e)} 
                value={title}
            />

            <textarea 
                type="text" 
                placeholder="Ingrese una descripción" 
                cols="45" rows="2" 
                onChange={(e) => handleDescription(e)}
                value={description} 
            />

            <button onClick={(e) => handleSubmit(e)}>Enviar</button>

        </form>
    )
}