import { useState } from "react";
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [toDoListStrings, setToDoListStrings] = useState(["item1", "item2", "item3"]);
  
  return (
    <main>
      <ToDoInput />
      <ToDoList toDoListStrings={toDoListStrings} />
    </main>
  )
}

export default App
