import { PropTypes } from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="flex flex-row content-center justify-between">
      <h1 className="font-bold text-2xl self-center font-mplus">{title}</h1>
      <Button onClick={onAdd} text={showAdd ? "Close" : "Add"} />
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
