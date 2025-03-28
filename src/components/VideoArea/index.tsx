const VideoArea: React.FC = () => {
  return (
      <section className="projectsContainer">
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
          <iframe
            className="video"
            src="https://youtube.com/embed/DCmIK3eQYns"
            title="Proyecto Integrador Nro. 4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
            En mi último Proyecto Integrador, diseñé un e-commerce especializado
            en productos Apple. Los usuarios registrados pueden explorar y
            buscar productos en detalle, agregar artículos al carrito de
            compras, realizar pedidos, y cancelar órdenes si así lo desean.
          </p>
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
        <div className="videoContainer">
          <iframe
            className="video"
            src="https://youtube.com/embed/mXecCxzYujg"
            title="StockSaleApp Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="redact">
          Este es un sitio web desarrollado para un cliente en mi puesto de Freelance Developer. En este sitio, el administrador o encargado de la ferretería podrá:<br/>
          <p className="redact-sm">• Gestionar a los usuarios, proveedores y sus productos.<br/>
• Gestionar los movimientos de compra/venta de los productos, como así también sus ordenes para reabastecer el comercio.<br/>
• Gestionar los ingresos/egresos del día, como así también los detalles de todos los movimientos sucedidos.<br/>
• Alertarse ante productos al límite de stock para ordenar su compra de reabastecimiento.</p>
</p>
        </div>
      </section>
  );
};

export default VideoArea;
