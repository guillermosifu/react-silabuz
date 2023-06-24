import { useState, useEffect } from "react"

const Tasks = () => {
    const [todos, setTodos] = useState([])
    const [newTask, setNewTask] = useState({
        status: 0,
        name: ''
    })
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        const tasks = localStorage.getItem('tasks')
        
        if (tasks) {
            setTodos(JSON.parse(tasks))
        }
        setIsLoaded(true)
    },[])

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('tasks', JSON.stringify(todos))
        }
    }, [todos, isLoaded])

    const handleChange = (event) => {
        setNewTask({
            ...newTask,
            [event.target.name]: event.target.value
        })
    }

    const addTasks = (event) => {
        if (event.key == 'Enter') {
            setTodos([...todos, newTask])
            setNewTask({
                status: 0,
                name: ''
            })
        }
    }

    const handleDeleteTask = (indexTask) => {
        const updateTodos = todos.filter((tarea, index) => index !== indexTask)
        setTodos(updateTodos)
    }

  return (
    <div>
        <div className="w-full flex gap-2 items-center py-2 px-3 border-2 rounded-lg">
            <input type="checkbox" name="status" value={newTask.status == 1 ? 0 : 1} checked={newTask.status == 1} onChange={handleChange}/>
            <input type="text" placeholder="Ingresa una nueva tarea" value={newTask.name} name="name" className="w-full focus:outline-none" onChange={handleChange} onKeyUp={addTasks}/>
        </div>
        {isLoaded ? (
            <div className="w-full mt-4 shadow-lg rounded-lg">
                {todos && todos.length > 0 && todos.map((tarea, index) => (
                    <div key={index} className="w-full flex items-center justify-between px-4 py-3 border-b rounded-lg">
                        <div className="flex gap-2">
                            <input type="checkbox"/>
                            <p className="truncate">{tarea.name}</p>
                        </div>
                        <span onClick={() => handleDeleteTask(index)} className="cursor-pointer">X</span>
                    </div>
                ))}

                <div className="w-full flex items-center justify-between px-4 py-3 border-t rounded-b-lg text-sm">
                    <p>{todos.length || 0} items left</p>
                    <div className="flex gap-2">
                        <button>
                            All
                        </button>
                        <button>
                            Active
                        </button>
                        <button>
                            Complete
                        </button>
                    </div>
                    <div>
                        <button>Clear Completed</button>
                    </div>
                </div>

                {/* Aqui va ir nuestras tareas */}
            </div>
        ) : (
            <p className="text-center">Cargando...</p>
        )}
    </div>
  )
}

export default Tasks
