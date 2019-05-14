import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'


class TodoList extends React.Component{
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState ({newTodo: e.target.value});
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''})
    }



    render(){
        return(
            <div className='todo-main-wrapper'>
                <div className='todo-list'>
                    <h1>Your Todo List</h1>
                    {this.props.todos &&
                    this.props.todos.map(todo => ( 
                    <h4 key = {todo.id}>
                        {todo.text}
                    </h4>
                    ))}
                </div>
                <input 
                    type = 'text'
                    value= {this.state.newTodo}
                    onChange= {this.handleChanges}
                    placeholder = 'Add New Todo'
                />
                <button onClick = {this.addTodo}> Add New Todo</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo}) (TodoList);