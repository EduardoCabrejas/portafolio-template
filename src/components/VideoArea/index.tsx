import React, { FC } from "react";
import VideoCard from "./VideoCard";

const VideoArea: FC = () => {
  return (
    <section className="flex flex-col rounded-xl border-2 border-[var(--borderColor)] bg-[var(--navBarBackground)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mx-4">
      <VideoCard
        src="https://youtube.com/embed/mXecCxzYujg"
        description={
          <>
          <h1 className="redact-title">StockSaleApp Website</h1>
          <p className="redact">Una sitio web para gestionar una ferretería. Proyecto freelance trabajado con .NET, C# y JavaScript.</p>
            <ul className="redact list-disc pl-4 mt-2">
              <li>Gestionar a los usuarios, proveedores y sus productos.</li>
              <li>Gestionar los movimientos de compra/venta.</li>
              <li>Gestionar turnos para usuarios y proveedores.</li>
              <li>Alertarse ante productos al límite de stock.</li>
            </ul>
          </>
        }
      />
      <VideoCard
        src="https://youtube.com/embed/2bcEALmt18g"
        description={
          <>
          <h1 className="redact-title">Stream Games Tournaments</h1>
          <p className="redact">Una plataforma de
            streaming para torneos de E-sports, donde podés ver
            torneos, formar equipos y unirte a las competiciones. 
            Contribuí destacadamente en el Frontend, especificamente en botones, banners,
            tarjetas, filtros, formularios, interfaces, modales, y otras cosas.
          </p>
          </>
        }
      />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 mx-4">
        <VideoCard
          src="https://youtube.com/embed/DCmIK3eQYns"
          description={
            <>
            <h1 className="redact-title">
              E-commerce Apple Products
            </h1>
              <p className="redact">Diseñé un e-commerce especializado
              en productos Apple. Los usuarios una vez registrados, pueden explorar para encontrar los productos disponibles, analizarlos en detalle, agregar artículos al carrito de
              compras, realizar pedidos, y cancelar órdenes si así lo desean.
              </p>
            </>
          }
        />
        <VideoCard
          src="https://youtube.com/embed/i4scN6wH3DQ"
          description={
            <>
            <h1 className="redact-title">A.P.I.S. Desprogramación</h1>
            <p className="redact">
              Desarrollé una página para el
              emprendimiento de mi madre, donde se detallan las actividades
              ofrecidas, el equipo detrás y los servicios disponibles. Implementé
              un sistema de reservas que permite a los usuarios registrados
              agendar y cancelar turnos según sus necesidades.
            </p>
            </>
          }
        />
      </div>

    </section>
  );
};

export default VideoArea;
