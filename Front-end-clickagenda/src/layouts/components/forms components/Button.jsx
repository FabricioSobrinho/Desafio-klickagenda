import Styles from "../../../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ handleClick, color, text, minSize, linkTo }) {
  return (
    <button
      onClick={handleClick}
      href={linkTo}
      className={`${Styles.button} ${color && Styles[color]} ${
        minSize && Styles.minSize
      }`}
    >
      <a href={linkTo}>{text}</a>
    </button>
  );
}

export default Button;
