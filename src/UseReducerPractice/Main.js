import React, { useReducer, useState } from 'react';

function tasksReducer( tasks, action){

    console.log("reducer function ", action);

    switch(action.type){

        case 'addTask':
            return [...tasks, {
                id: action.id,
                value: action.value
            }];
        
        case 'deleteTask'  :
            return tasks.filter((task) => task.id != action.id); 
    }


}

function Main() {

    const [tasks, dispatch ]= useReducer(tasksReducer, initialTasks);
    const [text,setText] = useState('');

    const addTask = (text) => {
        dispatch( {type: 'addTask', id: nextId++, value: text} )
    }

    const handleDelete = (taskId) => {
        dispatch( { type:'deleteTask', id: taskId } );
    }

    return (
        <div>
            <input type='text' placeholder='Enter task' value={text}
                onChange={(e) => setText(e.target.value)} />
            
            <button onClick={() => addTask(text)} > Add </button>

            {
                tasks ? tasks.map( (task) => {
                    return (
                        <div key={task.id}>
                            <span> {task.id} {task.value} </span>
                            <button onClick={() => handleDelete(task.id)}> delete </button>
                        
                        </div>
                    )
                }): null
            }

            

        </div>
    );

}
let nextId = 4;

const initialTasks = [
    { id: 1, value : 'Create plan for today', isComplete: false},
    { id: 2, value : 'Get Ready', isComplete: false},
    { id: 3, value : 'Say Hello', isComplete: false}
];

export default Main;