import React from 'react'

export default function ToDoItem({index, element, handleDeleteToDoItem}) {
  return (
    <li className="toDoItem" key={index}>{element}
    <i className="fa-solid fa-pen-to-square"></i>
    <button onClick={()=>{handleDeleteToDoItem(index)}}>
      <i className="fa-solid fa-trash"></i>
    </button>
    </li>
  )
}
