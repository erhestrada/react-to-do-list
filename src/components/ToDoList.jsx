import React from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoList({toDoListStrings, handleDeleteToDoItem, handleEditToDoItem}) {
    return (
        <ul className="ToDoList">
            {toDoListStrings.map((element, index) => {
                return(
                    <ToDoItem index={index} element={element} handleDeleteToDoItem={handleDeleteToDoItem} handleEditToDoItem={handleEditToDoItem}/>
                )
            })}

        </ul>
    )
}
