import { Link } from 'react-router'

function Encabezado(props){
    const {volverA, titulo} = props
    return (
        <header className="encabezado" >
            <Link to={volverA} className="encabezado-volver" aria-label="Volver">
            ‹
            </Link>
            <h1>{titulo}</h1>
        </header>
    )
}

export default Encabezado