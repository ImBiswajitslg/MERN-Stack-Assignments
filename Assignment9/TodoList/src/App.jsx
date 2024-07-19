//import { useState } from 'react'
import Header from "./Components/Header.jsx"
import Todos from "./Components/Todos.jsx"
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Todos />
    </div>
  )
}

export default App
