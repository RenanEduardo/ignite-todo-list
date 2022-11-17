import styles from './ToDo.module.css';
import { PlusCircle } from 'phosphor-react';
export function ToDo() {
  return (
    <div className={styles.toDo}>
      <div className={styles.createToDo}>
        <input type="text" placeholder="Adicione uma tarefa" />
        <button>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
      <div>
        <span>tarefas criadas 0</span>
        <span>Concluidas 0</span>
      </div>
    </div>
  );
}
