import { useState } from "react";
import "./style.css";
import Card from "../../components/Card";

type userData = {
  user: string
}

const SearchProfile = () => {

  const [userData, setUserData] = useState<userData>({
    user: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("mudou" + event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();
    console.log("Click no botao");
  };

  return (
    <>
      <main>
        <h1>Encontre um perfil GitHub</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            value={userData.user}
            className="search-input"
            placeholder="Digite o nome do usúario"
            onChange={handleChange}
          />
          <button type="submit">Encontrar</button>
        </form>

        <Card />
      </main>
    </>
  );
};

export default SearchProfile;
