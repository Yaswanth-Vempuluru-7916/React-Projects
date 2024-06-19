import React from 'react';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="flex flex-col justify-start w-[520px] min-h-[600px] bg-[#161a2b] text-center mx-auto mt-[128px] rounded-[10px] pb-[32px]">
            <TodoList />
        </div>
    );
}

export default App;
