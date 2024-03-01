import Button from "./forms components/Button";
import Styles from "../../styles/Forms.module.css";
import Input from "./forms components/Input";
import Select from "./forms components/Select";

// eslint-disable-next-line react/prop-types
function Forms({ handleInput, handleSelect, selectValue, action }) {
  return (
    <div className={Styles.forms}>
      <Input
        text={"Nome"}
        widthInput={25}
        heightInput={4}
        handleChange={handleInput}
        name="nomeDoFuncionario"
      />

      <Input
        text={"Hora de inicio"}
        widthInput={12.5}
        heightInput={4}
        mask={"99:99"}
        maskChar={""}
        handleChange={handleInput}
        name="horaDeInicio"
      />

      <Input
        text={"Hora de fim"}
        widthInput={12.5}
        heightInput={4}
        mask={"99:99"}
        maskChar={""}
        handleChange={handleInput}
        name="horaDeFim"
      />

      <Select
        name="diaDaSemana"
        handleOnChange={handleSelect}
        value={selectValue}
      />

      <Button text={"Adicionar horário"} color={"blue"} handleClick={action} />
    </div>
  );
}

export default Forms;
