import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ReactDOM from "react-dom";
import './components/Todo.css'

const todo = [
  {
    task: 'This is the first item in your ToDo List!',
    id: new Date(),
    completed: false,
  }
];

// const clearTodo = [{}];

class App extends React.Component {

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  //constructor class contructor function and add a state set at todo
  constructor(){
    super()
    this.state = {
      todo: todo,
    }
}


//turns completed state on and off
toggleTask = id => {
  this.setState({
    todo: this.state.todo.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    })
  });
};

//adds new task with form data and adds it to todo state
addTask = task => {
  const newTask = {
    task: task,
    id: new Date(),
    completed: false
  };

  this.setState({
    todo: [...this.state.todo, newTask]
  });
};

 //clears all tasks
 clearTasks = () =>{
  const clearTodo = [];

    this.setState({
      todo: clearTodo,
    });
};

clearCompTasks = () =>{
  const newTodo = []
  this.setState({
    todo: this.state.todo.filter(task=> {
      if (task.completed === false) {
        newTodo.push(task)
        return {
         newTodo
        };
      }
    })
  });
    
}

  render() {
    return (
      <div className='App'>
        <header>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} clearTasks={this.clearTasks} clearCompTasks={this.clearCompTasks} />
        </header>
        <TodoList toggleTask={this.toggleTask} todo={this.state.todo} />
      </div>
    );
  }
}


export default App;
