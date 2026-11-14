import Encabezado from '../components/Encabezado'
import TarjetaReporte from '../components/TarjetaReporte'
import reportes from '../data/reportes'

function ReportesCoordinador() {
    return (
        <main>
            <Encabezado titulo="Reportes de la ciudad" volverA="/" />
            
            {reportes.map((reporte) => (
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
export default ReportesCoordinador