import "./style.css";

type Props = {
    title: string
}

const ButtonLink = ({ title} : Props) => {
  return (
    <div>
      <a href="#">{title}</a>
    </div>
  );
};

export default ButtonLink 