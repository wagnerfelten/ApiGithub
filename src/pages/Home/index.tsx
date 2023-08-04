import ButtonLink from "../../components/ButtonLink";
import Header from "../../components/Header";
import "./App.css";

function App() {
  return (
    <>
     <Header />

      <main>
        <h1>Desafio Github API</h1>
        <p>DevSuperior - Escola de programação</p>
        <div className="Link">
          <ButtonLink title="Começar" />
        </div>
      </main>
    </>
  );
}

export default App;
