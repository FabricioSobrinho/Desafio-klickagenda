import InputMask from "react-input-mask";

// eslint-disable-next-line react/prop-types
function Input({ text, mask, maskChar, heightInput, widthInput, type, name, handleChange, value }) {
  const inputStyle = {
    height: `${heightInput}rem`,
    width: `${widthInput}rem`,
    background: "none",
    padding: "1%",
    outline: "none",
    border: "solid .2rem #B3B3B3",
    borderRadius: ".8rem",
    fontSize: "1.8rem",
    margin: "1rem 1rem",
    boxShadow: "0px 0px 10px -5px #000000b2",
  };

  return (
    <InputMask
      style={inputStyle}
      type={type}
      mask={mask ? mask : ""}
      maskChar={maskChar}
      placeholder={text}
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
}

export default Input;
