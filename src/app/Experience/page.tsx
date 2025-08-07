import React, { FC } from 'react';

const ExperiencePage: FC = () => {

    return(
        <>
        <h1 className="title mb-4">Experiencia</h1>
        <div className='relative overflow-hidden bg-opacity-wrapper flex flex-col rounded-xl border-2 border-[var(--borderColor)]'>
            <hgroup className="p-4 relative z-10">
                <h1 className='redact-title'>Desarrollador Full Stack - Truckers Talent Inc.</h1>
                <h2 className='redact-sub-title'>Desde Mar. 2025 hasta hoy.</h2>
                <p className='redact'>Me encuentro desarrollando una bolsa de trabajo para esta empresa start-up, dedicada para EE.UU. y su industria de logística. Aplico tecnologías como JavaScript, AWS S3 Bucket, Digital Ocean, React.js, Redux, Bootstrap, MUI, Node.js, PostgreSQL, entre otras.</p>
            </hgroup>
            <hgroup className="p-4 relative z-10">
                <h1 className='redact-title'>Desarrollador Full Stack - Freelancer</h1>
                <h2 className='redact-sub-title'>Desde Sept. 2024 hasta Feb. 2025.</h2>
                <p className='redact'>Desarrollé un sistema web de gestión para la ferretería de un cliente, con tecnologías como .NET, C#, HTML, CSS y JavaScript. Pueden visualizar más detalladamente el resultado y su repositorio en el sector <strong>Proyectos</strong>.</p>
            </hgroup>
        </div>
        </>
    );
};

export default ExperiencePage;