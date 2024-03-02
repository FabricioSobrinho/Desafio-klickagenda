import Styles from "../../styles/TimeCard.module.css";

// eslint-disable-next-line react/prop-types
function TimeCard({ nomeDoFuncionario, data }) {
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
    </div>
  );
}

export default TimeCard;
