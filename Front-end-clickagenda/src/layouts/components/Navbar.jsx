import Button from "./forms components/Button";
import SearchInput from "./forms components/SearchInput";

import Styles from "../../styles/Navbar.module.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [employeeName, setEmployeeName] = useState(null);
  const navigate = useNavigate(); 

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
  };

  const searchEmployee = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.get(
        `http://localhost:8080/horarios/${employeeName}`,
        config
      );

      console.log(response);
      navigate(`/funcionario/${employeeName}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className={Styles.mainNavbar}>
      <div className={Styles.leftNavbar}>
        <Button text={"Adicionar horário"} />
        <Button text={"Mostrar horários"} />
      </div>
      <div className={Styles.rightNavbar}>
        <SearchInput
          text={"Digite o nome do funcionário"}
          value={employeeName}
          handleChange={handleEmployeeName}
        />
        <Button
          text={"Buscar funcionário"}
          color={"blue"}
          handleClick={searchEmployee}
          minSize
        />
      </div>
    </nav>
  );
}

export default Navbar;
