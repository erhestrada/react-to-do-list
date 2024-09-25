import React from 'react'

export default function ToDoList() {
    let toDoList = ["item1", "item2", "item3"];
    return (
        <ul className="ToDoList">
            {toDoList.map((element, index) => {
                return(
                    <li className="toDoItem" key={index}>{element}
                    <i class="fa-solid fa-pen-to-square"></i>
                    </li>
                )
            })}

        </ul>
    )
}
