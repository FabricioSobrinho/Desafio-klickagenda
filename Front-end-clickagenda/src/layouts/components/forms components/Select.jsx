import Styles from "../../../styles/Select.module.css";

// eslint-disable-next-line react/prop-types
function Select({ text, name, handleOnChange, value }) {
  const options = [
    "SegundaFeira",
    "TercaFeira",
    "QuartaFeira",
    "QuintaFeira",
    "SextaFeira",
    "Sabado",
    "Domingo",
  ];

  return (
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
        className={Styles.select}
      >
        {text}
        {options.map((option) => (
          <option value={option} key={option}>
            {option == "SegundaFeira" && "Segunda-Feira"}
            {option == "TercaFeira" && "Terça-Feira"}
            {option == "QuartaFeira" && "Quarta-Feira"}
            {option == "QuintaFeira" && "Quinta-Feira"}
            {option == "SextaFeira" && "Sexta-Feira"}
            {option == "Sabado" && option}
            {option == "Domingo" && option}
          </option>
        ))}
      </select>
  );
}

export default Select;
