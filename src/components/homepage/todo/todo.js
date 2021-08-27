import classes from '../../../styles/todo.module.css';
import TodoForm from './todo-form';
import TodoList from './todo-list';

const Todo = () => {
  return (
    <section className={classes['todo-section']}>
      <div className={classes['todo-container']}>
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default Todo;