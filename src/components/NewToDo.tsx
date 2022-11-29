import styles from './NewToDo.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface NewToDo {
  content: string;
  checked: boolean;
}
interface NewToDoProps {
  onCreate: (newTodo: NewToDo) => void;
}
export function NewToDo({ onCreate }: NewToDoProps) {
  const [newToDoContent, setNewToDoContent] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setNewToDoContent(event.target.value);
  };
  const handleInputInvalidity = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //
    const newToDo = {
      content: newToDoContent,
      checked: false,
    };

    onCreate(newToDo);

    setNewToDoContent('');
  };
  const isNewToDoEmpty = newToDoContent.length === 0;
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.createToDo}>
        <input
          type="text"
          name="newTodo"
          value={newToDoContent}
          onChange={handleInputChange}
          onInvalid={handleInputInvalidity}
          placeholder="Adicione uma tarefa"
        />
        <button type="submit" disabled={isNewToDoEmpty}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}
