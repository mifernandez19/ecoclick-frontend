import {Link} from 'react-router'

function Inicio(){
    return(
        <main>
            <h1>EcoClick</h1>
            <p>Reporta los microbasureros de tu barrio</p>
            <Link to="/login" className="boton">Iniciar sesión</Link>
            <Link to="/registro" className="boton">Registrarse</Link>
        </main>
    )
}

export default Inicio