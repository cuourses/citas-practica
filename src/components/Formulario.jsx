import { useEffect, useState } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintoma(paciente.sintoma)
    }
  }, [paciente]);

  // Generar id
  const generarId = () => Date.now().toString(36).substring(2) + Math.random().toString(36).substring(2);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar fomulario
    if ([nombre, propietario, email, fecha, sintoma].includes('')) {
      setError(true);
      return;
    };

    setError(false);

    // Crear paciente
    const newPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma,
    };

    if (paciente.id) {
      // Editar Paciente 
      newPaciente.id = paciente.id;

      const nuevosPacientes = pacientes.map(pacienteState => pacienteState.id === newPaciente.id ? newPaciente : pacienteState);
      setPacientes(nuevosPacientes)

      setPaciente({})
    } else {
      // Agregar paciente
      newPaciente.id = generarId();
      setPacientes([...pacientes, newPaciente]);
    }

    // Reiniciar Formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintoma('');
  };


  return (
    <div>
      <h2 className="mb-2 font-black text-3xl text-center text-gray-900">Seguimiento Pacientes</h2>
      <p className="mb-12 font-bold text-center">Añade Pacientes y<span className="text-indigo-600"> Administralos</span></p>

      <form className="px-5 py-10 rounded-md shadow-lg bg-white" onSubmit={handleSubmit}>

        {error && <Error />}

        <div className="mb-5">
          <label htmlFor="mascota" className="mb-1 block font-bold uppercase text-gray-700">Mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full p-3 border rounded-md outline-none"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="mb-1 block font-bold uppercase text-gray-700">Propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="w-full p-3 border rounded-md outline-none"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="mb-1 block font-bold uppercase text-gray-700">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Correo@correo.com"
            className="w-full p-3 border rounded-md outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="mb-1 block font-bold uppercase text-gray-700">Alta</label>
          <input
            id="alta"
            type="date"
            className="w-full p-3 border rounded-md outline-none"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="sintmomas" className="mb-1 block font-bold uppercase text-gray-700">Sintomas</label>
          <textarea
            name="sintmomas"
            id="sintmomas"
            rows="3"
            className="w-full p-3 border rounded-md outline-none"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)} >
          </textarea>
        </div>

        <input
          type="submit"
          value={paciente.id ? "editar paciente" : "agregar paciente"}
          className="w-full p-3 font-bold uppercase cursor-pointer transition-colors duration-300 text-white bg-indigo-600  hover:bg-indigo-800" />
      </form>

    </div>
  )
}

export default Formulario