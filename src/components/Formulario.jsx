
const Formulario = () => {
  return (
    <div>
      <h2 className="mb-2 font-black text-3xl text-center text-gray-900">Seguimiento Pacientes</h2>
      <p className="mb-12 font-bold text-center">Añade Pacientes y<span className="text-indigo-600"> Administralos</span></p>

      <form className="px-5 py-10 rounded-md shadow-lg bg-white">
        <div className="mb-5">
          <label htmlFor="mascota" className="mb-1 block font-bold uppercase text-gray-700">Mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full p-3 border rounded-md outline-none" />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="mb-1 block font-bold uppercase text-gray-700">Propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="w-full p-3 border rounded-md outline-none" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="mb-1 block font-bold uppercase text-gray-700">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Correo@correo.com"
            className="w-full p-3 border rounded-md outline-none" />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="mb-1 block font-bold uppercase text-gray-700">Alta</label>
          <input
            id="alta"
            type="date"
            className="w-full p-3 border rounded-md outline-none" />
        </div>

        <div className="mb-5">
          <label htmlFor="sintmomas" className="mb-1 block font-bold uppercase text-gray-700">Sintomas</label>
          <textarea
            name="sintmomas"
            id="sintmomas"
            rows="3"
            className="w-full p-3 border rounded-md outline-none">
          </textarea>
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className="w-full p-3 font-bold uppercase cursor-pointer transition-colors duration-300 text-white bg-indigo-600  hover:bg-indigo-800" />
      </form>

    </div>
  )
}

export default Formulario