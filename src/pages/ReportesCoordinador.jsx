import { useState } from 'react'
import Encabezado from '../components/Encabezado'
import TarjetaReporte from '../components/TarjetaReporte'
import reportes from '../data/reportes'

const estados = ['Todos', 'Pendiente', 'En proceso','Completado']
function ReportesCoordinador() {
    const [filtroEstado, setFiltroEstado] = useState('Todos')
    const reportesFiltrados = filtroEstado ==='Todos'
    ? reportes
  : reportes.filter((reporte) => reporte.estado === filtroEstado)
    return (
        <main>
            <Encabezado titulo="Reportes de la ciudad" volverA="/" />

   <div className="filtros">
  {estados.map((estado) => (
    <button
      key={estado}
      type="button"
      className={filtroEstado === estado ? 'filtro filtro-activo' : 'filtro'}
      aria-pressed={filtroEstado === estado}
      onClick={() => setFiltroEstado(estado)}
    >
      {estado}
    </button>
  ))}
</div>
           
            {reportesFiltrados.map((reporte) => (
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