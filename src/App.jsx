import { useState } from "react";
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [toDoListStrings, setToDoListStrings] = useState([]);
  const [toDoString, setToDoString] = useState('');

  // handler for when user types in new to-do and hits the add button
  function handleAddToDoItem(newToDoString) {
    if (newToDoString !== "") {
      const updatedToDoListStrings = [...toDoListStrings, newToDoString];
      setToDoListStrings(updatedToDoListStrings);
    }
  }

  function handleDeleteToDoItem(indexOfItemToDelete) {
    const updatedToDoListStrings = toDoListStrings.filter((element, index) => {
      return index!==indexOfItemToDelete
    });
    setToDoListStrings(updatedToDoListStrings);
  }

  function handleEditToDoItem(indexOfItemToEdit) {
    const stringToEdit = toDoListStrings[indexOfItemToEdit];
    setToDoString(stringToEdit);
    handleDeleteToDoItem(indexOfItemToEdit);
  }
  
  return (
    <main>
      <ToDoInput handleAddToDoItem={handleAddToDoItem} toDoString={toDoString} setToDoString={setToDoString} />
      <ToDoList toDoListStrings={toDoListStrings} handleDeleteToDoItem={handleDeleteToDoItem} handleEditToDoItem={handleEditToDoItem} />
    </main>
  )
}

export default App
