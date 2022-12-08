// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  const onDelete = (todo) => {
    console.log('I am OnDelete of todo', todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log('I amadding this todo', title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Go to the market',
      desc: 'You need to go to market to get this job done',
    },
    {
      sno: 2,
      title: 'Go to the mall',
      desc: 'You need to go to mall to get this job done',
    },
    {
      sno: 3,
      title: 'Go to the doctor',
      desc: 'You need to go to doctor to get this job done',
    },
  ]);

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
