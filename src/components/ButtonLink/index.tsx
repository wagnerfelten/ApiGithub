import {Link} from "react-router-dom";

import "./style.css";

type Props = {
    title: string
}

const ButtonLink = ({ title} : Props) => {
  return (
    <div>
      <Link to="/searchProfile">{title}</Link>
    </div>
  );
};

export default ButtonLink 