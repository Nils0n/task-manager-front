import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Estudar programação",
      isCompleted: false
    },
    {
      id: 2,
      description: "Ler",
      isCompleted: true
    },
  ]);

  return (
    <>

    </>
  )
}

export default App
