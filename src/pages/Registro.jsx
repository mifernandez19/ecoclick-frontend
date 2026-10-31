import { useState } from 'react'
import Encabezado from '../components/Encabezado'
import Boton from '../components/Boton'

function Registro() {
    const [documento, setDocumento] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [celular, setCelular] = useState('')
    const [correo, setCorreo] = useState('')

    const [errorDocumento, setErrorDocumento] = useState('')
    const [errorNombres, setErrorNombres] = useState('')
    const [errorApellidos, setErrorApellidos] = useState('')
    const [errorCelular, setErrorCelular] = useState('')
    const [errorCorreo, setErrorCorreo] = useState('')

    function manejarEnvio(evento){
        evento.preventDefault()
        let hayErrores = false

        if (documento.trim() === '') {
            setErrorDocumento('El número de documento es obligatorio')
            hayErrores = true
        } else if (!/^\d{6,10}$/.test(documento)) {
            setErrorDocumento('El documento debe tener entre 6 y 10 números, sin puntos ni espacios')
            hayErrores = true
        } else {
            setErrorDocumento('')
        }

         if (nombres.trim() === '') {
            setErrorNombres('Los nombres son obligatorios')
            hayErrores = true
        } else {
            setErrorNombres('')
        }

        if (apellidos.trim() === ''){
            setErrorApellidos('Los apellidos son obligatorios')
            hayErrores = true
        }else  {
            setErrorApellidos('')
        }
        
        if (celular.trim() === '') {
            setErrorCelular('El número de celular es obligatorio')
            hayErrores = true
        } else if (!/^3\d{9}$/.test(celular)) {
            setErrorCelular('El celular debe tener 10 números y empezar por 3')
            hayErrores = true
        } else {
            setErrorCelular('')
        }

        if (correo.trim() === '') {
            setErrorCorreo('El correo electrónico es obligatorio')
            hayErrores = true
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            setErrorCorreo('Escribe un correo válido, por ejemplo: nombre@correo.com')
            hayErrores = true
        } else {
            setErrorCorreo('')
        }

        if(hayErrores){
            return
        }

        alert('Cuenta lista para crear')
    }

    return (
        <main>
            <Encabezado titulo="Crear cuenta" volverA="/" />
            <p>Regístrate para reportar los microbasureros de tu barrio.</p>
             <form onSubmit={manejarEnvio} noValidate>
                <label htmlFor="documento">Número de documento</label>
                <input
                id="documento"
                type="text"
                inputMode="numeric"
                maxLength="10"
                value={documento}
                onChange={(evento) => setDocumento(evento.target.value)}
                aria-invalid={errorDocumento !== ''}
                aria-describedby={errorDocumento ? 'error-documento' : undefined}
                />
                {errorDocumento && (
                    <p id="error-documento" className="error">
                        {errorDocumento}
                </p>
            )}
                

                <label htmlFor="nombres">Nombres</label>
                <input
                id="nombres"
                type="text"
                maxLength="50"
                value={nombres}
                onChange={(evento) => setNombres(evento.target.value)}
                aria-invalid={errorNombres !== ''}
                aria-describedby={errorNombres ? 'error-nombres' : undefined}
            />
                {errorNombres && (
               <p id="error-nombres" className="error">
        {errorNombres}
    </p>
)}


            

                <label htmlFor="apellidos">Apellidos</label>
                <input
                id="apellidos"
                type="text"
                maxLength="50"
                value={apellidos}
                onChange={(evento) => setApellidos(evento.target.value)}
                aria-invalid={errorApellidos !== ''}
                aria-describedby={errorApellidos ? 'error-apellidos' : undefined}
            />
                {errorApellidos && (
                    <p id="error-apellidos" className="error">
                        {errorApellidos}
                    </p>
                )}
            
                <label htmlFor="celular">Número de celular</label>
                <input
                id="celular"
                type="tel"
                inputMode="numeric"
                maxLength="10"
                value={celular}
                onChange={(evento) => setCelular(evento.target.value)}
                aria-invalid={errorCelular !== ''}
                aria-describedby={errorCelular ? 'error-celular' : undefined}
                />
                {errorCelular && (
                    <p id="error-celular" className="error">
                        {errorCelular}
                    </p>
                )}

                <label htmlFor="correo">Correo electrónico</label>
                <input
                id="correo"
                type="email"
                maxLength="100"
                value={correo}
                onChange={(evento) => setCorreo(evento.target.value)}
                aria-invalid={errorCorreo !==''}
                aria-describedby={errorCorreo ? 'error-correo' : undefined}
                />
                {errorCorreo && (
                    <p id="error-correo" className="error">
                    {errorCorreo}
                    </p>
                )}
                 <Boton texto="Crear cuenta" />
            </form>
        </main>
    )
}

export default Registro