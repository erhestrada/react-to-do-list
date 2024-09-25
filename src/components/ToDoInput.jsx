import React, { useState } from 'react'

export default function ToDoInput({handleAddToDoItem, toDoString, setToDoString}) {
  
  return (
    <header>
        <input
        placeholder = "enter todo"
        value={toDoString}
        onChange={(e) => {setToDoString(e.target.value)}}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddToDoItem(toDoString);
            setToDoString('');
          }
        }}
        />
        <button onClick={() => {
          handleAddToDoItem(toDoString);
          setToDoString('');
          }}>Add</button>
    </header>
  )
}
