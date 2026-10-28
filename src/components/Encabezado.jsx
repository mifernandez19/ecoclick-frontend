import { Link } from 'react-router'

function Encabezado(props){
    return (
        <header className="encabezado" >
            <Link to={props.volverA} className="encabezado-volver" aria-label="Volver">
            ‹
            </Link>
            <h1>{props.titulo}</h1>
        </header>
    )
}

export default Encabezado
