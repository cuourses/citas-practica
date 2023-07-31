import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([]);


  return (
    <div className="w-11/12 mx-auto pt-12">
      <Header />

      <div
        className=" pb-10 grid gap-8 md:grid-cols-2">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
