import React from 'react';

const Filter = ({ onFilterChange }) => {
    return (
        <div className='filter'>
        <button onClick={() => onFilterChange('all')}>All</button>
        <button onClick={() => onFilterChange('done')}>Done</button>
        <button onClick={() => onFilterChange('not-done')}>Not Done</button>
        </div>
    );
};

export default Filter;
