import { useDispatch, useSelector } from 'react-redux';

import classes from '../../../styles/todo-list-item.module.css';
import IconCheckmark from '../../ui/icons/icon-checkmark';
import IconClock from '../../ui/icons/icon-clock';
import IconDelete from '../../ui/icons/icon-delete';
import { todosActions } from '../../../store/todo';

const TodoItem = ({ id, text, status }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const changeTodoStatus = (todoId, status) => {
    dispatch(todosActions.changeStatus({ id: todoId, status: status }));
  };

  const deleteTodo = (todoId) => {
    console.log(todos);
    dispatch(todosActions.delete({ id: todoId }));
  };

  return (
    <li className={classes['todo-list__item']}>
      {status === 'progress' && <span className={classes['todo-list__item-status'] + ' ' + classes['progress']}>In progress</span>}
      {status === 'finished' && <span className={classes['todo-list__item-status'] + ' ' + classes['finished']}>Finished</span>}
      <div className={classes['todo-list__item-content']}>
        <span>{text}</span>
        <div className={classes['todo-list__item-actions']}>
          {status === 'progress' && (
            <button aria-label='Press to mark to do as finished' onClick={() => changeTodoStatus(id, 'finished')}>
              <IconCheckmark />
            </button>
          )}
          {status === 'finished' && (
            <button aria-label='Press to mark to do as in progress' onClick={() => changeTodoStatus(id, 'progress')}>
              <IconClock />
            </button>
          )}
          <button aria-label='Press to delete to do' onClick={() => deleteTodo(id)}>
            <IconDelete />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
