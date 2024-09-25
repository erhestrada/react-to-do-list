import React, { useState } from 'react'

export default function ToDoInput({handleAddToDoItem}) {

  const [toDoString, setToDoString] = useState('');
  
  return (
    <header>
        <input value={toDoString} onChange={(e) => {setToDoString(e.target.value)}} placeholder = "enter todo"/>
        <button onClick={() => {handleAddToDoItem(toDoString)}}>Add</button>
    </header>
  )
}
