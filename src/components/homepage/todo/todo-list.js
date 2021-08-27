import { useSelector } from 'react-redux';

import classes from '../../../styles/todo-list.module.css';
import TodoItem from './todo-list-item';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className={classes['todo-list']}>
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return <TodoItem key={index} id={todo.id} text={todo.text} status={todo.status} />;
        })
      ) : (
        <li className={classes['todo-list__item']}>There are no tasks to do. Consider adding some!</li>
      )}
    </ul>
  );
};

export default TodoList;
