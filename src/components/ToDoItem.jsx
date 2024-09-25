import React from 'react'

export default function ToDoItem({index, element, handleDeleteToDoItem, handleEditToDoItem}) {
  return (
    <li className="toDoItem" key={index}>{element}
    <button onClick={() => {handleEditToDoItem(index)}}>
      <i className="fa-solid fa-pen-to-square"></i>
    </button>
    <button onClick={()=>{handleDeleteToDoItem(index)}}>
      <i className="fa-solid fa-trash"></i>
    </button>
    </li>
  )
}
