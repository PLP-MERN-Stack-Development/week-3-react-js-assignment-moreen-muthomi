import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // Import our custom hook
import Button from '../components/Button';
import Card from '../components/Card';





export default function TasksPage() {
    // Use our custom hook to persist tasks!
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true; // 'All'
  });

  return (
    <Card className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Task Manager</h1>
      
      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <Button type="submit" variant="primary">Add</Button>
      </form>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <Button onClick={() => setFilter('All')} variant={filter === 'All' ? 'primary' : 'secondary'}>All</Button>
        <Button onClick={() => setFilter('Active')} variant={filter === 'Active' ? 'primary' : 'secondary'}>Active</Button>
        <Button onClick={() => setFilter('Completed')} variant={filter === 'Completed' ? 'primary' : 'secondary'}>Completed</Button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
            <span
              onClick={() => handleToggleComplete(task.id)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-white'}`}
            >
              {task.text}
            </span>
            <Button onClick={() => handleDeleteTask(task.id)} variant="danger">Delete</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}