function TarjetaReporte ({direccion, descripcion,estado, fecha}){
return (
    <article className="tarjeta">
        <h2>{direccion}</h2>
        <p>{descripcion}</p>
        <p>{estado}-{fecha}</p>
    </article>
)
}
export default TarjetaReporte