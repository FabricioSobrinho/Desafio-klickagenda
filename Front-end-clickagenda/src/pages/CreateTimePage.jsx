import axios from "axios";
import { useState } from "react";

import Forms from "../layouts/components/Forms";
import Message from "../layouts/components/Message";

import Styles from "../styles/CreateTimePage.module.css";

import addTime from "../assets/public/images/AddTime.svg";
import backIcon from "../assets/public/images/back-icon.png";

function CreateTimePage() {
  const [message, setMessage] = useState(false);
  const [type, setType] = useState("success");

  const [timeData, setTimeData] = useState({
    diaDaSemana: "SegundaFeira",
  });

  const handleTime = (e) => {
    setTimeData((prevTimeData) => ({
      ...prevTimeData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWeekDay = (e) => {
    setTimeData({
      ...timeData,
      diaDaSemana: e.target.options[e.target.selectedIndex].value,
    });
  };

  const createTime = async () => {
    setMessage("");

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/horario",
        timeData,
        config
      );

      console.log(response);
      setType("success");
      setMessage("Horario criado com sucesso!");
    } catch (err) {
      console.log(err);
      setType("error");
      setMessage("Erro ao criar horario!");
    }
  };

  return (
    <div className={Styles.mainCreatePage}>
      {message && <Message type={type} time={2000} text={message} />}
      <div className={Styles.leftCreateTime}>
        <img src={addTime} alt="add time image" />
      </div>
      <div className={Styles.forms}>
        <Forms
          handleInput={handleTime}
          handleSelect={handleWeekDay}
          selectValue={timeData.diaDaSemana}
          action={createTime}
        />
      </div>
      <div className={Styles.rightCreateTime}>
        <img src={backIcon} alt="back ico image" className={Styles.img1} />
        <img src={backIcon} alt="back ico image" className={Styles.img2} />
        <img src={backIcon} alt="back ico image" className={Styles.img3} />
        <img src={backIcon} alt="back ico image" className={Styles.img4} />
        <img src={backIcon} alt="back ico image" className={Styles.img5} />
      </div>
    </div>
  );
}

export default CreateTimePage;
