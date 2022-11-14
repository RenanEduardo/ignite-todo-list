import { Header } from "./components/Header";
import "./globals.css";

function App() {

  return (
    <div>
      <Header />
      <main>
        <div>
          <input type="text" />
          <button>Criar</button>
        </div>
      </main>
      <footer>
        <div>
          <span>tarefas criadas 0</span>
          <span>Concluidas 0</span>
        </div>
      </footer>
    </div>
  )
}

export default App
