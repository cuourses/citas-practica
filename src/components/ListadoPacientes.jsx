import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente }) => {


  return (
    <div>

      {
        pacientes.length
          ?
          <>
            <h2 className="mb-2 font-black text-3xl text-center text-gray-900">Listado Pacientes</h2>
            <p className="mb-12 font-bold text-center">Administra tus<span className="text-indigo-600"> Pacientes y Citas</span></p>
          </>
          :
          <>
            <h2 className="mb-2 font-black text-3xl text-center text-gray-900">No hay Pacientes</h2>
            <p className="mb-12 font-bold text-center">Comienza añadiendo<span className="text-indigo-600"> Pacientes </span></p>
          </>
      }


      <div className="md:h-screen md:overflow-y-scroll">
        {
          pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ListadoPacientes