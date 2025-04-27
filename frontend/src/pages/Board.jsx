import React from 'react';
import Navbar from '../components/Navbar';
import TaskColumn from '../components/TaskColumn';
import { useTask } from '../context/TaskContext';

function Board() {
  const { tasks } = useTask();

  const handleMove = (id, newStatus) => {
    console.log(`Move task ${id} to ${newStatus}`);
    // You'll integrate updateTaskAPI here later
  };

  const handleEdit = (task) => {
    console.log('Edit task:', task);
    // You can open a modal for editing here
  };

  const handleDelete = (id) => {
    console.log('Delete task:', id);
    // You'll integrate deleteTaskAPI here later
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <TaskColumn title="To Do" tasks={tasks.filter(task => task.status === "To Do")} onMove={handleMove} onEdit={handleEdit} onDelete={handleDelete} />
          <TaskColumn title="In Progress" tasks={tasks.filter(task => task.status === "In Progress")} onMove={handleMove} onEdit={handleEdit} onDelete={handleDelete} />
          <TaskColumn title="Done" tasks={tasks.filter(task => task.status === "Done")} onMove={handleMove} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default Board;
