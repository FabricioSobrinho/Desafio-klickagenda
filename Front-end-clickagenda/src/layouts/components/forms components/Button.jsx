import Styles from "../../../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ handleClick, color, text, minSize }) {
  return (
    <button
      onClick={handleClick}
      className={`${Styles.button} ${color && Styles[color]} ${
        minSize && Styles.minSize
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
