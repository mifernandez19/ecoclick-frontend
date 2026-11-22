import { useState } from "react";
import Encabezado from "../components/Encabezado";
import Boton from '../components/Boton'
import { useNavigate } from 'react-router'
import usuarios from '../data/usuarios'



function Login() {
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [errorCorreo, setErrorCorreo] = useState('')
    const [errorContrasena, setErrorContrasena] = useState('')
    const [errorAcceso, setErrorAcceso] = useState('')
    const navegar = useNavigate()

    function manejarEnvio(evento) {
        evento.preventDefault()
        let hayErrores = false

        if (correo === '') {
            setErrorCorreo('El correo es obligatorio')
            hayErrores = true
        } else {
            setErrorCorreo('')
        }

        if (contrasena === '') {
            setErrorContrasena('La contraseña es obligatoria')
            hayErrores = true
        } else if (contrasena.length < 8) {
            setErrorContrasena('La contraseña debe tener mínimo 8 caracteres')
            hayErrores = true
        } else {
            setErrorContrasena('')
        }
        if (hayErrores) {
            return
        }
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.correo === correo && usuario.contrasena === contrasena
        )

        if (!usuarioEncontrado) {
            setErrorAcceso('Correo o contraseña incorrectos')
            return
        }

        setErrorAcceso('')

        if (usuarioEncontrado.rol === 'ciudadano') {
            navegar('/inicio-ciudadano')
        } else if (usuarioEncontrado.rol === 'coordinador') {
            navegar('/reportes-coordinador')
        } else if (usuarioEncontrado.rol === 'operador') {
            navegar('/mis-tareas')
        }
    }
    return (
        <main>
            <Encabezado titulo="Iniciar sesión" volverA="/" />
            <form onSubmit={manejarEnvio}>
                <label htmlFor="correo">Correo electrónico</label>
                <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)}
                />
                {errorCorreo && <p className="error">{errorCorreo}</p>}
                <label htmlFor="contrasena">Contraseña</label>
                <input
                    id="contrasena"
                    type="password"
                    value={contrasena}
                    onChange={(evento) => setContrasena(evento.target.value)}
                />
                {errorContrasena && <p className="error">{errorContrasena}</p>}
                {errorAcceso && (
                    <p className="error" role="alert">
                        {errorAcceso}
                    </p>
                )}
                <Boton texto="Iniciar sesión" />
            </form>
        </main>
    )
}

export default Login