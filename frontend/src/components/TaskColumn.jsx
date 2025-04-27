import React from 'react';
import TaskCard from './TaskCard';

function TaskColumn({ title, tasks, onMove, onEdit, onDelete }) {
  return (
    <div className="col-md-4">
      <h4 className="text-center">{title}</h4>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onMove={onMove} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskColumn;
