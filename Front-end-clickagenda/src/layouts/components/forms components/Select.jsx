import Styles from "../../../styles/Select.module.css";

// eslint-disable-next-line react/prop-types
function Select({ text, name, handleOnChange, value }) {
  const options = [
    "Selecione uma opção",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
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
            {option}
          </option>
        ))}
      </select>
  );
}

export default Select;
