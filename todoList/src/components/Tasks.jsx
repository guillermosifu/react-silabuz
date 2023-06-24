import { useState } from "react"

const Tasks = () => {

    const tasks = localStorage.getItem('tasks')

    const taskLocal = tasks ? JSON.parse(tasks) : []

    const [newTask, setNewTask] = useState({
        status: 0,
        name: ''
    })
    
    const handleChange = (event) => {
        setNewTask({
            ...newTask,
            [event.target.name]: event.target.value
        })
    }

    const addTasks = () => {
        const task = JSON.stringify([...taskLocal, newTask])
        localStorage.setItem('task', task)
    }

  return (
    <div>
        <div className="w-full flex gap-2 items-center py-2 px-3 border-2 rounded-lg">
            <input type="checkbox" name="status" value={newTask.status == 1 ? 0 : 1} checked={newTask.status == 1} onChange={handleChange}/>
            <input type="text" placeholder="Ingresa una nueva tarea" name="name" className="w-full" onChange={handleChange} onKeyUp={addTasks}/>
        </div>
        <div className="w-full mt-4 shadow-lg rounded-lg">
            <div className="w-full flex items-center justify-between px-4 py-3 border-b rounded-lg">
                <div className="flex gap-2">
                    <input type="checkbox"/>
                    <p className="truncate">Tarea 1</p>
                </div>
                <span className="cursor-pointer">X</span>
            </div>

            <div className="w-full flex items-center justify-between px-4 py-3 border-t rounded-b-lg text-sm">
                <p>{taskLocal.length || 0} items left</p>
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
    </div>
  )
}

export default Tasks
