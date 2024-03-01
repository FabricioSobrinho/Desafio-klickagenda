import Styles from "../../styles/TimeCard.module.css";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Button from "./forms components/Button";

// eslint-disable-next-line react/prop-types
function TimeCard({ enableEdit, nomeDoFuncionario, data }) {
  return (
    <div className={Styles.mainCard}>
      <div className={Styles.title}>{nomeDoFuncionario}</div>
      {data.map((item, index) => (
        <div key={index}>
          <div className={Styles.times}>
            <p>
              {item.diaDaSemana == "SegundaFeira" && "Segunda Feira"}
              {item.diaDaSemana == "TercaFeira" && "Terca Feira"}
              {item.diaDaSemana == "QuartaFeira" && "Quarta Feira"}
              {item.diaDaSemana == "QuintaFeira" && "Quinta Feira"}
              {item.diaDaSemana == "SextaFeira" && "Sexta Feira"}
              {item.diaDaSemana == "Sabado" && "Sábado"}
              {item.diaDaSemana == "Domingo" && "Domingo"}
              : {item.horaDeInicio} às {item.horaDeFim}
            </p>
          </div>
        </div>
      ))}

      {enableEdit && (
        <div className={Styles.editTime}>
          <Button text={<FaPencilAlt />} minSize />
          <Button text={<FaTrashAlt />} color={"red"} minSize />
        </div>
      )}
    </div>
  );
}

export default TimeCard;
