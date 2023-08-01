import { useEffect, useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizado = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizado);
  };

  return (
    <div className="w-11/12 mx-auto pt-12">
      <Header />

      <div
        className=" pb-10 grid gap-8 md:grid-cols-2">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
