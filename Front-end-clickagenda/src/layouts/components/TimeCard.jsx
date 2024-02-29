import Styles from "../../styles/TimeCard.module.css";

function TimeCard() {
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
    </div>
  );
}

export default TimeCard;
