import React, { Component } from 'react';

class TodoList extends Component {
    
    render(){
        return(
            <ul>
                {this.props.todos.map((todo, i) => <li onClick={() => this.props.click(i)} className={todo.state} key={i}><span onClick={(e)=> this.props.delete(i, e)}><i className="fa fa-trash"></i></span>{todo.todo}</li>)}
            </ul>
        );
    }
}

export default TodoList;