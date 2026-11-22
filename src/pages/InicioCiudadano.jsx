import { Link } from 'react-router'

function InicioCiudadano() {
  return (
    <main>
      <h1>Hola, bienvenido a EcoClick</h1>
      <p>¿Qué quieres hacer hoy?</p>
      <Link to="/crear-reporte" className="boton">Crear reporte</Link>
      <Link to="/mis-reportes" className="boton">Mis reportes</Link>
      <Link to="/notificaciones" className="boton">Notificaciones</Link>
      <Link to="/" className="boton boton-secundario">Cerrar sesión</Link>
    </main>
  )
}

export default InicioCiudadano