import Header from "../../components/Header";
import "./style.css";

const SearchProfile = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Encontre um perfil GitHub</h1>
        <input type="text" placeholder="Digite o nome do usúario" />
        <button type="submit">Encontrar</button>
      </main>
    </>
  );
};

export default SearchProfile;