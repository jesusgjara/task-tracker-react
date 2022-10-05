import { PropTypes } from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="flex flex-row content-center justify-between">
      <h1 className="font-bold text-2xl self-center font-mplus">{title}</h1>
      <Button onClick={onClick} text="Agregar" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
