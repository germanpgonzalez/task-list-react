

export const TaskForm = () => {

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Apretaste el submit");

    }

    return (
        <form>
            <h1>Task Form 😀</h1>
            <input type="text" placeholder="Ingrese una tarea" />
            <textarea type="text" placeholder="Ingrese una descripción" cols="45" rows="2"/>
            <button onClick={(e) => handleSubmit(e)}>Enviar</button>
        </form>
    )
}