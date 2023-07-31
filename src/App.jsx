import Header from "./components/Header"
import Formulario from "./components/Formulario"

function App() {

  return (
    <div className="w-11/12 mx-auto pt-12">
      <Header />

      <div
        className=" pb-10 grid gap-8 md:grid-cols-2">
        <Formulario />
        <p>listado pacientes</p>
      </div>

    </div>
  )
}

export default App
