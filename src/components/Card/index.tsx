import user from "../../assets/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";

import "./style.css";

const Card = () => {
    return(
        <main className="main-container">
            <img src={user} alt="user" />
            <section className="section-container">
                <h3>Informações</h3>
                <p>Perfil:</p>
                <p>Seguidores:</p>
                <p>Localidade:</p>
                <p>Nome:</p>
            </section>
        </main>
    )
}

export default Card;