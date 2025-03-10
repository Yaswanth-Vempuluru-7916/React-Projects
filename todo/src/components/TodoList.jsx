import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [...todos, todo];
        setTodos(newTodos);
        console.log(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id);
        setTodos(removedArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    return (
        <>
            <h1 className="mt-[32px] mb-[32px] text-white text-[24px] font-bold">What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </>
    );
};

export default TodoList;
