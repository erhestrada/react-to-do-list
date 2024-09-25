import React from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoList() {
    let toDoList = ["item1", "item2", "item3"];
    return (
        <ul className="ToDoList">
            {toDoList.map((element, index) => {
                return(
                    <ToDoItem index={index} element={element} />
                )
            })}

        </ul>
    )
}
