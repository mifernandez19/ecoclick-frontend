import Encabezado from '../components/Encabezado'
import TarjetaReporte from '../components/TarjetaReporte'
import reportes from '../data/reportes'

const operadorActualId =1

function MisTareas() {
    const misTareas = reportes.filter((reporte) => reporte.operadorId === operadorActualId)

    return (
        <main>
            <Encabezado titulo="Mis tareas" volverA="/" />
                {misTareas.length ===0 &&(
                    <p>No tienes tareas asignadas por ahora.</p>
                )}
            
                {misTareas.map((reporte) => (
                    <TarjetaReporte
                        key={reporte.id}
                        direccion={reporte.direccion}
                        descripcion={reporte.descripcion}
                        estado={reporte.estado}
                        fecha={reporte.fecha}
                    />
                ))}
                

        </main>
    )
}

export default MisTareas