import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({ text: event });
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.addTodo(this.textInput.value);
        this.textInput.value = '';
    }

    render() {
        return (
            <form className={style.TodoForm} onSubmit={this.onSubmitHandler}>
                <label>Dodaj zadanie:</label>
                <input
                    type='text'
                    ref={(input) => { this.textInput = input; }}
                    placeholder='Wpisz zadanie i naciśnij enter'
                    />
            </form>
        );
    }
}

export default TodoForm;