import React from 'react'

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
      super();
      this.state = {
        taskInput: ""
      };
    }
  
    handleChanges = e => {
      this.setState({
        taskInput: e.target.value
      });
    };
  
    handleClear = e =>{
        e.preventDefault();
        this.props.clearTasks();
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.addTask(this.state.taskInput);
    };

    handleCompClear = e =>{
        e.preventDefault();
        this.props.clearCompTasks()
    }
   
  
    render() {
      return (
        <form>
          {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
          <input
            value={this.state.taskInput}
            onChange={this.handleChanges}
            type="text"
            name="task"
          />
          <button onClick={this.handleSubmit}>Add</button>
          <button onClick={this.handleClear}>Clear</button>
          <button onClick={this.handleCompClear}>Clear Completed</button>
        </form>
      );
    }
  }


export default TodoForm