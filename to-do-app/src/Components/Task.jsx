// Task.js
import React, { useState } from 'react';

const Task = ({ todo, onToggle, onEdit, onRemove }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(todo.description);

    const handleEditStart = () => {
        setIsEditing(true);
        setEditedDescription(todo.description);
    };

    const handleEditSubmit = () => {
        onEdit({ id: todo.id, description: editedDescription });
        setIsEditing(false);
    };

    const handleEditCancel = () => {
        setIsEditing(false);
    };

    return (
        <li>
        <input type="checkbox" checked={todo.isDone} onChange={() => onToggle(todo.id)} />
        <span>{todo.description}</span>
        {isEditing ? (
            <form onSubmit={handleEditSubmit}>
            <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleEditCancel}>Cancel</button>
            </form>
        ) : (
            <button onClick={handleEditStart}>Edit</button>
        )}
        <button onClick={() => onRemove(todo.id)}>Remove</button>
        </li>
    );
};

export default Task;
