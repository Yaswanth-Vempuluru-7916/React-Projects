import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={`flex justify-between items-center my-[4px] mx-auto text-white p-[16px] rounded-[5px] w-[90%] ${todo.isComplete ? 'line-through opacity-40' : ''}
            ${index % 4 === 0 ? 'bg-gradient-to-r from-[#5d0cff] to-[#9b00fa]' : ''}
            ${index % 4 === 1 ? 'bg-gradient-to-r from-[#ff0cf1] to-[#fa0087]' : ''}
            ${index % 4 === 2 ? 'bg-gradient-to-r from-[#149fff] to-[#117aff]' : ''}
            ${index % 4 === 3 ? 'bg-gradient-to-r from-[#ff7614] to-[#ff5411]' : ''}`}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="flex items-center text-[24px] cursor-pointer">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="mr-[5px] text-white"
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="text-white"
                />
            </div>
        </div>
    ));
};

export default Todo;
