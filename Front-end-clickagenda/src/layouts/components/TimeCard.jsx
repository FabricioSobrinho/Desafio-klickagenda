import Styles from "../../styles/TimeCard.module.css";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Button from "./forms components/Button";

// eslint-disable-next-line react/prop-types
function TimeCard({ enableEdit }) {
  return (
    <div className={Styles.mainCard}>
      <div className={Styles.title}>NOME DO USUARIO</div>
      <div className={Styles.times}>
        <p>Seg: 12h22 à 12h29</p>
        <p>Seg: 12h22 à 12h29</p>
        <p>Seg: 12h22 à 12h29</p>
        <p>Seg: 12h22 à 12h29</p>
        <p>Seg: 12h22 à 12h29</p>
        <p>Seg: 12h22 à 12h29</p>
        <p>Seg: 12h22 à 12h29</p>
      </div>
      {enableEdit && (
        <div className={Styles.editTime}>
          <Button text={<FaPencilAlt />} minSize/>
          <Button text={<FaTrashAlt />} color={"red"} minSize/>
        </div>
      )}
    </div>
  );
}

export default TimeCard;
