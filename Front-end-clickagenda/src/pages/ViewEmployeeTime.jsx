import Styles from "../styles/ViewEmployeeTime.module.css";

import TimeCard from "../layouts/components/TimeCard";
import { useParams } from "react-router-dom";

import imageLeft from "../assets/public/images/SearchTime.svg";
import imageRight from "../assets/public/images/SearchTime2.svg";

import axios from "axios";
import { useEffect, useState } from "react";

function ViewEmployeeTime() {
  const { employee } = useParams();
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    async function getEmployee() {
      setEmployeeData([]);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await axios.get(
          `http://localhost:8080/funcionario/${employee}`,
          config
        );

        setEmployeeData(() => [...response.data]);
      } catch (err) {
        console.log(err);
      }
    }

    getEmployee();
  }, []);

  return (
    <div className={Styles.mainViewTime}>
      <img src={imageLeft} className={Styles.leftImg}/>
      <img src={imageRight} className={Styles.rightImg}/>
      <div className={Styles.times}>
        <TimeCard data={employeeData} nomeDoFuncionario={employee} />
      </div>
    </div>
  );
}

export default ViewEmployeeTime;
