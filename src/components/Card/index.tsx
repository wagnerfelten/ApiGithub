import "./style.css";

type Props = {
  perfil: string;
  segui: string;
  local: string;
  name: string;
  avatar_url: string
};



const Card = ({ perfil, segui, local, name, avatar_url }: Props) => {
  
  return (
    <main className="main-container">
      <img src={avatar_url} alt="user" />
      <section className="section-container">
        <h3>Informações</h3>
        <div className="descipt-title color-blue">
          Perfil: <h5>{perfil}</h5>
        </div>
        <div className="descipt-title">
          Seguidores: <h5>{segui}</h5>
        </div>
        <div className="descipt-title">
            Localidade: <h5>{local}</h5>
        </div>
        <div className="descipt-title">
            Nome: <h5>{name}</h5>
        </div>
      </section>
    </main>
  );
};

export default Card;
