import React from 'react'

export default function ToDoItem({index, element}) {
  return (
    <li className="toDoItem" key={index}>{element}
    <i class="fa-solid fa-pen-to-square"></i>
    </li>
  )
}
