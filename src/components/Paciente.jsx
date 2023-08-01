function Paciente({ paciente }) {
  const { nombre, propietario, email, fecha, sintoma } = paciente;
  return (
    <div className='mb-5 py-10 px-5 rounded-lg shadow-lg bg-white'>
      <p className='mb-2 text-gray-700 font-bold uppercase'>Nombre: <span className='font-normal normal-case'>{nombre}</span></p>
      <p className='mb-2 text-gray-700 font-bold uppercase'>Propietario: <span className='font-normal normal-case'>{propietario}</span></p>
      <p className='mb-2 text-gray-700 font-bold uppercase'>emil: <span className='font-normal normal-case'>{email}</span></p>
      <p className='mb-2 text-gray-700 font-bold uppercase'>fecha alta: <span className='font-normal normal-case'>{fecha}</span></p>
      <p className='mb-2 text-gray-700 font-bold uppercase'>síntomas: <span className='font-normal normal-case'>{sintoma}</span></p>
    </div>
  )
}

export default Paciente