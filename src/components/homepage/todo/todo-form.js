import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../../store/todo';

import classes from '../../../styles/todo-form.module.css';
import IconAdd from '../../ui/icons/icon-add';

const TodoForm = () => {
  const todoInputRef = useRef();

  const dispatch = useDispatch();

  const addNewTodo = (event) => {
    event.preventDefault();

    const todoText = todoInputRef.current.value;

    dispatch(
      todosActions.add({
        id: Date.now(),
        text: todoText,
        status: 'progress',
      })
    );

    todoInputRef.current.value = '';
  };

  return (
    <form className={classes['todo-add__form']} onSubmit={addNewTodo}>
      <fieldset className={classes['todo-add__form-fieldset']}>
        <legend className='sr-only'>Add a new to do:</legend>
        <label className={classes['todo-add__form-label']}>
          <span className='sr-only'>Add a new to do:</span>
          <input ref={todoInputRef} type='text' placeholder='Add a new to do...' className={classes['todo-add__form-input']} required />
        </label>
      </fieldset>
      <button aria-label='Press to add a new to do to the list' className={classes['todo-add__form-button']}>
        <IconAdd />
      </button>
    </form>
  );
};

export default TodoForm;
