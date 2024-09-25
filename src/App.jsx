import { useState } from "react";
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [toDoListStrings, setToDoListStrings] = useState([]);

  // handler for when user types in new to-do and hits the add button
  function handleAddToDoItem(newToDoString) {
    if (newToDoString !== "") {
      const updatedToDoListStrings = [...toDoListStrings, newToDoString];
      setToDoListStrings(updatedToDoListStrings);
    }
  }
  
  return (
    <main>
      <ToDoInput handleAddToDoItem={handleAddToDoItem} />
      <ToDoList toDoListStrings={toDoListStrings} />
    </main>
  )
}

export default App
