import Button from "./forms components/Button"
import SearchInput from "./forms components/SearchInput"

function Navbar() {
  return (
    <nav>
        <Button text={"Adicionar horário"} />
        <Button text={"Mostrar horários"} />

        <SearchInput text={"Digite o nome do funcionário"}/>
        <Button text={"Buscar funcionário"} color={"blue"} minSize />
    </nav>
  )
}

export default Navbar