import { Header } from './components/Header';
import { NewToDo } from './components/NewToDo';
import { ToDoList } from './components/ToDoList';
import styles from './App.module.css';
import './globals.css';
import { useState } from 'react';

const initialTodos = [
  {
    id: 1,
    checked: false,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 2,
    checked: true,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleNewToDo = ({ content, checked }: any) => {
    const newId = todos.length > 0 ? todos.length + 1 : 1;
    const newToDo = {
      id: newId,
      content,
      checked,
    };
    setTodos([...todos, newToDo]);
  };
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewToDo onCreate={handleNewToDo} />
        <ToDoList list={todos} />
      </main>
    </div>
  );
}

export default App;
