"use client";
import { useTheme } from "@/context/themeContext";
import VideoArea from "@/components/VideoArea/index";
import gitH from '@/assets/icons/1 GitHub.png'
import Image from "next/image";

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light' ? 'redirButtonLight' : 'redirButtonDark';

    return (
        <>
        <div className="bodyContainer">
            <h1 className="title">Proyectos</h1>
            <p className="text">Durante mi período de estudio, he adquirido un conocimiento profundo de diversas tecnologías y herramientas. Sin embargo, sigo en una constante búsqueda de nuevas oportunidades para aprender y aplicar lo que voy descubriendo a través de redes profesionales y comunidades de desarrolladores. Estoy seguro de mi capacidad y precisión en el manejo de lo siguiente:</p>
            <div className="mt-8">
                <VideoArea/>
            </div>
            <div className="m-5 grid grid-cols-[70%_30%] gap-4 items-center">
            <p className="text">Para quienes se encuentren interesados y quieran acceder a conocer detalladamente mis proyectos, les dejo el enlace sobre mi perfil de GitHub aquí presente:</p>
            <button 
          onClick={() => window.open("https://github.com/EduardoCabrejas", "_blank")} 
          className={buttonClass}>
            <Image src={gitH} alt="GitHub Icon" className="w-10 h-10 rounded-full" />
          Ir a GitHub
        </button>
        </div>
        </div>
        </>
    )
}

export default Projects;