import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from "./components/FilterButton";
import React, {useState} from 'react';
import {nanoid} from 'nanoid';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP); // these constants are being defined outside our App() function because ...
//..if they were defined inside they will be recalculated everytime <App/> component is re-rendered. 



function App(props) {
  const [tasks, setTask] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id){
    let updatedTasks = tasks.map((task)=>{
      if(id===task.id){
        return{...task, completed: !task.completed};
      }
      return task;
    });
    setTask(updatedTasks);
    console.log(updatedTasks[0])
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTask(editedTaskList);
  }  

  function deleteTask(id){
    const remainingTasks = tasks.filter((task)=>task.id!==id);
    setTask(remainingTasks);
    console.log(id);
  }


  function addTask(name){
    const newTask = {id:`todo-${nanoid()}`, name, completed: false};
    setTask([...tasks, newTask]);
    // alert(name);
  }

  const tasklist = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));


  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  

  const tasksNoun = tasklist.length !== 1 ? "tasks" : "task";
  const headingText = `${tasklist.length} ${tasksNoun} remaining`;
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {tasklist}
      </ul>
    </div>
  );
}

export default App;
