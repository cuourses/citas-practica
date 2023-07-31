import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div>
      <h2 className="mb-2 font-black text-3xl text-center text-gray-900">Listado Pacientes</h2>
      <p className="mb-12 font-bold text-center">Administra tus<span className="text-indigo-600"> Pacientes y Citas</span></p>

      <div className="md:h-screen md:overflow-y-scroll">
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </div>
  )
}

export default ListadoPacientes