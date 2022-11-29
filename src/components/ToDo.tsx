import styles from './ToDo.module.css';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

interface ToDoProps {
  content: string;
  todoId: number;
  checked: boolean;
  onDelete: (id: number) => void;
  onConcluded: (id: number) => void;
}

export function ToDo({
  content,
  todoId,
  checked,
  onDelete,
  onConcluded,
}: ToDoProps) {
  const [_checked, setChecked] = useState(checked);
  const handleChange = () => {
    setChecked(!_checked);
    onConcluded(todoId);
  };

  const handleDelete = () => {
    onDelete(todoId);
  };
  return (
    <div className={styles.toDo}>
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={_checked}
          onChange={handleChange}
        />
      </label>
      <p className={_checked ? styles.checkedTodo : ''}>{content}</p>
      <Trash size={24} onClick={handleDelete} />
    </div>
  );
}
