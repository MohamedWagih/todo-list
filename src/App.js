import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  state = {
    todos: [
        {todo:'Todo 1', state:'notCompleted'},
        {todo:'Todo 2', state:'Completed'},
        {todo:'Todo 3', state:'notCompleted'},
    ]
  }
  
  addTodoHandler = () => {
    let x = document.getElementById('addedTodo').value;
    if(x){
      let tmpTodos = this.state.todos;
      tmpTodos.push({todo:x, state:'notCompleted'});
      this.setState({todos:tmpTodos});
      document.getElementById('addedTodo').value = '';
    }
  }

  todoStateHandler = (i) => {
    let tmpTodos = this.state.todos;
    tmpTodos[i].state === 'Completed' ? tmpTodos[i].state='notCompleted' : tmpTodos[i].state='Completed';
    this.setState({todos:tmpTodos});
  }

  deleteTodoHandler = (i, event) => {
    event.stopPropagation();
    let tmpTodos = this.state.todos;
    tmpTodos.splice(i,1);
    this.setState({todos:tmpTodos});
  }

  render() {
    let total = this.state.todos.length;
    let completed = this.state.todos.reduce((a,c)=>a+(c.state==='Completed'),0);
    return (
      <div className='container'>
        <h1>To-Do List</h1>
        <div className="input-group">
          <input id='addedTodo' type="text" className="form-control" placeholder="Add new Todo"/>
          <div className="input-group-append">
            <i onClick={this.addTodoHandler} className="fa fa-plus" id="add-todo"></i>
          </div>
        </div>
        <TodoList todos={this.state.todos} click={this.todoStateHandler} delete={this.deleteTodoHandler}/>
        <div className='row'>
          <div className='col-6'>
            <p>Total : {total}</p>
          </div>
          <div className='col-6'>
            <p>Completed : {completed}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
