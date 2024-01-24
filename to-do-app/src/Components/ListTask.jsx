import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, editTodo, removeTodo } from './todoSlice';
import Task from './Task';

const ListTask = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const [editedTask, setEditedTask] = useState(null);

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleEdit = (task) => {
        setEditedTask(task);
    };

    const handleSaveEdit = () => {
        if (editedTask) {
        dispatch(editTodo(editedTask));
        setEditedTask(null);
        }
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <ul>
        {todos.map((todo) => (
            <Task
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onEdit={() => handleEdit(todo)}
            onRemove={handleRemove}
            />
        ))}
        {editedTask && (
            <form onSubmit={handleSaveEdit}>
            <input
                type="text"
                value={editedTask.description}
                onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditedTask(null)}>Cancel</button>
            </form>
        )}
        </ul>
    );
};

export default ListTask;
