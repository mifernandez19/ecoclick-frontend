import Encabezado  from '../components/Encabezado';
import TarjetaReporte from '../components/TarjetaReporte'
import reportes from '../data/reportes';


function MisReportes() {
    return (
        <main>
            <Encabezado titulo="Mis reportes" volverA="/inicio-ciudadano" />
            {reportes.map((reporte)=> (
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
export default MisReportes