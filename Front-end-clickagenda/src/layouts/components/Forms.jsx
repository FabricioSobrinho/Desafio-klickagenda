import Button from "./forms components/Button";
import Styles from "../../styles/Forms.module.css";
import Input from "./forms components/Input";
import Select from "./forms components/Select";

function Forms() {
  return (
    <form className={Styles.forms}>
      <Input text={"Nome"} widthInput={25} heightInput={4} />

      <Input
        text={"Hora de inicio"}
        widthInput={12.5}
        heightInput={4}
        mask={"99:99"}
        maskChar={""}
      />
      <Input
        text={"Hora de fim"}
        widthInput={12.5}
        heightInput={4}
        mask={"99:99"}
        maskChar={""}
      />

      <Select />

      <Button text={"Adicionar horário"} color={"blue"}/>
    </form>
  );
}

export default Forms;
