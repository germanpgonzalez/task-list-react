

export const TaskList = ({data}) => {
    return (
        <>
            <h1>Task List 😯</h1>
            {
                data.map((task) => {
                    return(
                        <div key={task.id}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
} 