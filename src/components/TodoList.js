import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';


const TodoList = props => {
    let listTodo = props.dataList.map(todo => {
        return <Todo item={todo} remove={props.removeTodo} key={todo.id} />
    })
    return (
        <ol className={style.TodoList}>
            {listTodo}
        </ol>
    );
};

export default TodoList;