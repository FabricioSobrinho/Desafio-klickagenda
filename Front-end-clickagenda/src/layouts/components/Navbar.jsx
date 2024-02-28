import Button from "./forms components/Button";
import SearchInput from "./forms components/SearchInput";

import Styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={Styles.mainNavbar}>
      <div className={Styles.leftNavbar}>
        <Button text={"Adicionar horário"} />
        <Button text={"Mostrar horários"} />
      </div>
      <div className={Styles.rightNavbar}>
        <SearchInput text={"Digite o nome do funcionário"} />
        <Button text={"Buscar funcionário"} color={"blue"} minSize />
      </div>
    </nav>
  );
}

export default Navbar;
