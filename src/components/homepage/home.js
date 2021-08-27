import { Fragment } from 'react';

import '../../styles/home.module.css';
import Todo from './todo/todo';

const Home = () => {
  return (
    <Fragment>
      <h1>To do list</h1>
      <Todo />
    </Fragment>
  );
};

export default Home;
