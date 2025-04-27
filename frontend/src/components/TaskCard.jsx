import React from 'react';

function TaskCard({ task, onMove, onEdit, onDelete }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Assigned: {task.assignedTo}</h6>
        <p className="card-text">{task.description}</p>
        <div className="d-flex gap-2">
          {task.status !== "In Progress" && (
            <button className="btn btn-sm btn-primary" onClick={() => onMove(task._id, "In Progress")}>Move to In Progress</button>
          )}
          {task.status !== "Done" && (
            <button className="btn btn-sm btn-success" onClick={() => onMove(task._id, "Done")}>Move to Done</button>
          )}
          <button className="btn btn-sm btn-warning" onClick={() => onEdit(task)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
