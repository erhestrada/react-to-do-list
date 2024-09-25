import React, { useState } from 'react'

export default function ToDoInput({handleAddToDoItem}) {

  const [toDoString, setToDoString] = useState('');
  
  return (
    <header>
        <input
        placeholder = "enter todo"
        value={toDoString}
        onChange={(e) => {setToDoString(e.target.value)}}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddToDoItem(toDoString);
          }
        }}
        />
        <button onClick={() => {handleAddToDoItem(toDoString)}}>Add</button>
    </header>
  )
}
