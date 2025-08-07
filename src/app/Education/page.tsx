import React, { FC } from "react";

const EducationPage: FC = () => {
  return (
    <>
    <h1 className="title mb-4">Educación</h1>
    <div className="relative overflow-hidden bg-opacity-wrapper flex flex-col rounded-xl border-2 border-[var(--borderColor)]">
        <hgroup className="p-4 relative z-10">
          <h1 className="redact-title">Full Stack Web Developer - Soy Henry</h1>
          <h2 className="redact-sub-title">Mar. 2024 - Ago. 2024</h2>
          <p className="redact">Curso profesional virtual Full-Time de aprox. 5 meses, 800 horas. <a className="link" href="https://drive.google.com/file/d/17Y6COWjL-kX0pcAgwSqLirB8j6erb6Q2/view?usp=sharing" target="_blank">Aquí está mi certificado</a>.</p>
        </hgroup>
        <hgroup className="p-4 relative z-10">
          <h1 className="redact-title">Bachillerato de Técnico Agropecuario - C.E.P.T. N° 20</h1>
          <h2 className="redact-sub-title">Mar. 2011 - Dic. 2016</h2>
          <p className="redact">Estudios secundarios finalizados en esta escuela de alternancia, con enfoque en la Agricultura. Vivía y estudiaba una semana en la escuela. Viernes de dicha semana volvía a casa y esperaba unas dos semanas para volver a viajar a la escuela.
          </p>
        </hgroup>
    </div>
    </>
  );
};

export default EducationPage;