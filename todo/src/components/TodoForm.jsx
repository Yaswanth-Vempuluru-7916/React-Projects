import React, { useState, useEffect, useRef } from 'react';

const TodoForm = ({ onSubmit, edit }) => {
    const [input, setInput] = useState(edit ? edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: edit ? edit.id : Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className="mb-[32px]" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={edit ? 'Update your item' : 'Add a todo'}
                value={input}
                name="text"
                className={`p-[14px] pr-[32px] pl-[16px] rounded-[4px_0_0_4px] border-2 ${edit ? 'border-[#149fff]' : 'border-[#5d0cff]'} outline-none w-[320px] bg-transparent text-white placeholder-[#e2e2e2]`}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className={`p-[16px] border-none rounded-[0_4px_4px_0] cursor-pointer outline-none ${edit ? 'bg-gradient-to-r from-[#149fff] to-[#117aff] p-[16px_22px]' : 'bg-gradient-to-r from-[#5d0cff] to-[#9b00fa]'} text-white capitalize`}>
                {edit ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default TodoForm;
