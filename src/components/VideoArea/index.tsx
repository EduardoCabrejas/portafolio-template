const VideoArea: React.FC = () => {
  return (
    <>
      <div className="projectsContainer">
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/i4scN6wH3DQ"
            title="Proyecto Integrador Nro. 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
            En mi tercer Proyecto Integrador, desarrollé una página para el
            emprendimiento de mi madre, donde se detallan las actividades
            ofrecidas, el equipo detrás y los servicios disponibles. Implementé
            un sistema de reservas que permite a los usuarios registrados
            agendar y cancelar turnos según sus necesidades.
          </p>
        </div>
        <div className="videoContainer">
          <p className="redact">
            En mi último Proyecto Integrador, diseñé un e-commerce especializado
            en productos Apple. Los usuarios registrados pueden explorar y
            buscar productos en detalle, agregar artículos al carrito de
            compras, realizar pedidos, y cancelar órdenes si así lo desean.
          </p>
          <iframe
            className="video"
            src="https://youtube.com/embed/DCmIK3eQYns"
            title="Proyecto Integrador Nro. 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/2bcEALmt18g"
            title="Presentación del Proyecto Final"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
            En mi proyecto final, junto a mi equipo, creamos una plataforma de
            streaming para torneos de E-sports. Los usuarios pueden visualizar
            torneos, formar equipos y unirse a las competiciones. Contribuí en
            el desarrollo de múltiples elementos, como botones, banners,
            tarjetas de presentación, filtros, formularios, gráficos,
            interfaces, modales, secciones administrativas y tablas.
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoArea;
