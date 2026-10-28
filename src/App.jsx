import { Routes, Route } from 'react-router'
import Inicio from './pages/Inicio'
import CrearReporte from './pages/CrearReporte'
import Notificaciones from './pages/Notificaciones'
import Login from './pages/Login' 
import Registro from './pages/Registro'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Inicio />}  />
      <Route path="/crear-reporte" element={<CrearReporte/>} />
      <Route path="/notificaciones" element={<Notificaciones/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Registro/>} />

    </Routes>
  )
}

export default App