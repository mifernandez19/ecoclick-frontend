import { useState } from 'react'
import Encabezado from '../components/Encabezado'
import Boton from '../components/Boton'

function CrearReporte() {
  const [descripcion, setDescripcion] = useState('')
  const [direccion, setDireccion] = useState('')
  const [foto, setFoto] = useState(null)

  const [errorDescripcion, setErrorDescripcion] = useState('')
  const [errorDireccion, setErrorDireccion] = useState('')
  const [errorFoto, setErrorFoto] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()
    let hayErrores = false

    if (descripcion.trim() === '') {
      setErrorDescripcion('Describe el problema')
      hayErrores = true
    } else if (descripcion.trim().length < 10) {
      setErrorDescripcion('La descripción debe tener mínimo 10 caracteres')
      hayErrores = true
    } else {
      setErrorDescripcion('')
    }

    if (direccion.trim() === '') {
      setErrorDireccion('La dirección es obligatoria')
      hayErrores = true
    } else {
      setErrorDireccion('')
    }

    if (!foto) {
      setErrorFoto('Agrega una foto del microbasurero')
      hayErrores = true
    } else {
      setErrorFoto('')
    }

    if (hayErrores) {
      return
    }

    alert('Reporte listo para enviar')
  }

  return (
    <main>
      <Encabezado titulo="Crear nuevo reporte" volverA="/" />

      <form onSubmit={manejarEnvio}>
        <label htmlFor="descripcion">Descripción del problema</label>
        <textarea
          id="descripcion"
          rows="4"
          maxLength="500"
          value={descripcion}
          onChange={(evento) => setDescripcion(evento.target.value)}
        />
        {errorDescripcion && <p className="error">{errorDescripcion}</p>}

        <label htmlFor="direccion">Dirección</label>
        <input
          id="direccion"
          type="text"
          maxLength="100"
          value={direccion}
          onChange={(evento) => setDireccion(evento.target.value)}
        />
        {errorDireccion && <p className="error">{errorDireccion}</p>}

        <label htmlFor="foto">Foto del microbasurero</label>
        <input
          id="foto"
          type="file"
          accept="image/*"
          onChange={(evento) => setFoto(evento.target.files[0])}
        />
        {errorFoto && <p className="error">{errorFoto}</p>}

        <Boton texto="Enviar reporte" />
      </form>
    </main>
  )
}

export default CrearReporte