import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn font-mplus normal-case bg-blue-900 hover:bg-blue-500"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Agregar",
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
