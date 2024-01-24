import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, editTodo, removeTodo } from './todoSlice';
import Task from './Task';
import Filter from './Filter';
import './ListTask.css';

const ListTask = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const [editedTask, setEditedTask] = useState(null);
    const [filter, setFilter] = useState('all');

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

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div>
        <Filter onFilterChange={handleFilterChange} />
        <ul>
            {todos
            .filter((todo) => {
                if (filter === 'all') {
                return true;
                } else if (filter === 'done') {
                return todo.isDone;
                } else if (filter === 'not-done') {
                return !todo.isDone;
                }
                return false;
            })
            .map((todo) => (
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
        </div>
    );
};

export default ListTask;
