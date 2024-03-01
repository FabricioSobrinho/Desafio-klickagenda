import Styles from "../styles/ShowTimesPage.module.css";

import TimeCard from "../layouts/components/TimeCard";

import { useState, useEffect } from "react";
import axios from "axios";

function ShowTimesPage() {
  const [data, setData] = useState([]);

  const getTimes = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:8080/horarios",
        config
      );

      setData(response.data);

      console.log(response.data)

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTimes();
  }, []);

  return (
    <div className={Styles.mainShowTimes}>
      <div className={Styles.cards}>
      { data &&      
      Object.keys(data).map((funcionario) => (
        <TimeCard key={funcionario} nomeDoFuncionario={funcionario} data={data[funcionario]} />
      ))}
      </div>
      <div className={Styles.topShowTimes}></div>
    </div>
  );
}

export default ShowTimesPage;
