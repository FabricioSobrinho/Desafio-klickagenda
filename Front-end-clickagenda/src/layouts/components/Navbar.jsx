import Button from "./forms components/Button";
import SearchInput from "./forms components/SearchInput";

import Styles from "../../styles/Navbar.module.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Message from "./Message";

function Navbar() {
  const [employeeName, setEmployeeName] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
  };

  const searchEmployee = async () => {
    setMessage(null);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(
        `http://localhost:8080/funcionario/${employeeName}`,
        config
      );

      navigate(`/funcionario/${employeeName}`);
    } catch (err) {
      console.log(err);

      setMessage("Erro ao buscar funcionário");
    }

    window.location.reload();
  };

  return (
    <nav className={Styles.mainNavbar}>
      <div className={Styles.leftNavbar}>
        <Button text={"Adicionar horário"} linkTo="/" />
        <Button text={"Mostrar horários"} linkTo="/horarios" />
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
      {message && <Message text={message} type="error" time={2000} />}
    </nav>
  );
}

export default Navbar;
