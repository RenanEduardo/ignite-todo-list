import styles from './ToDoList.module.css';
import clipboard from '../assets/clipboard.svg';
import { ToDo } from './ToDo';
import { useEffect, useState } from 'react';

interface ToDo {
  id: number;
  content: string;
  checked: boolean;
}

interface ToDoListProps {
  list: ToDo[];
}
export function ToDoList({ list }: ToDoListProps) {
  const [internalList, setInternalList] = useState(list);
  const [concludedCounter, setConcludedCounter] = useState(0);

  useEffect(() => {
    setInternalList(list);
  }, [list]);

  useEffect(() => {
    let counter = 0;
    internalList.forEach((todo) => {
      if (todo.checked) counter++;
    });
    setConcludedCounter(counter);
  }, [internalList]);

  const renderEmptyList = () => {
    return (
      <>
        <img src={clipboard} />
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </>
    );
  };

  const handleConcluded = (concludedId: number) => {
    const newInternalList: ToDo[] = [];
    internalList.forEach((todo) => {
      let newValue;
      if (todo.id === concludedId) {
        newValue = !todo.checked;
        newInternalList.push({
          id: todo.id,
          checked: newValue,
          content: todo.content,
        });
      } else {
        newInternalList.push(todo);
      }
    });
    setInternalList(newInternalList);
  };

  const handleDelete = (deleteId: number) => {
    const todosWithoutDeletedOne = internalList.filter(
      (todo) => todo.id !== deleteId
    );
    setInternalList(todosWithoutDeletedOne);
  };

  return (
    <>
      <div className={styles.todoList}>
        <div>
          <span>Tarefas criadas</span>
          <div className={styles.counter}>
            <span>{internalList.length}</span>
          </div>
        </div>
        <div className={styles.concludedInfo}>
          <span>Concluidas</span>
          <div className={styles.counter}>
            <span>
              {concludedCounter} de {internalList.length}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {internalList.length > 0
          ? internalList.map((todo) => (
              <ToDo
                key={todo.id}
                content={todo.content}
                todoId={todo.id}
                checked={todo.checked}
                onDelete={handleDelete}
                onConcluded={handleConcluded}
              />
            ))
          : renderEmptyList()}
      </div>
    </>
  );
}
