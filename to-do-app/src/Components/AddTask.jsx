import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const Addtask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(description));
        setDescription('');
    };

    return (
        <form className='addTask' onSubmit={handleSubmit}>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add Task</button>
        </form>
    );
};

export default Addtask;
