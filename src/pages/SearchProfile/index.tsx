import { useState } from "react";
import Card from "../../components/Card";
import axios from "axios";

import "./style.css";

type userData = {
  user: string;
};

type dataGithub = {
  url: string;
  name: string;
  following: string;
  location: string;
  avatar_url: string;
};

const SearchProfile = () => {
  const [dataGithub, setDataGithub] = useState<dataGithub>();

  const [userData, setUserData] = useState<userData>({
    user: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${userData.user}`)
      .then((res) => {
        setDataGithub(res.data);
      })
      .catch((error) => {
        setDataGithub(undefined);
        console.log(error);
      });
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
        
        <div className="card-container">
        
          {dataGithub && (
            <Card
              avatar_url={dataGithub.avatar_url}
              perfil={dataGithub.url}
              local={dataGithub.location}
              segui={dataGithub.following}
              name={dataGithub.name}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default SearchProfile;
