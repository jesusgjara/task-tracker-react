import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom"
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  
  return (
    <header className="flex flex-row content-center justify-between">
      <h1 className="font-bold text-2xl self-center font-mplus">{title}</h1>
      {location.pathname === "/" && <Button onClick={onAdd} text={showAdd ? "Close" : "Add"} />}
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
