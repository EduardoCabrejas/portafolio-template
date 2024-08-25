import Carousel from "@/components/Carousel/Carousel";
import { imagesArray } from "@/components/Carousel/utils/utils";
import { EmblaOptionsType } from "embla-carousel";

const carouselOptions: EmblaOptionsType = {
    loop: true,
};

const Skills: React.FC = () => {
    return (
        <>
        <div className="area">
            <h1 className="title">Habilidades</h1>
            <p className="text">Durante mi período de estudio, he adquirido un conocimiento profundo de diversas tecnologías y herramientas. Sin embargo, sigo en una constante búsqueda de nuevas oportunidades para aprender y aplicar lo que voy descubriendo a través de redes profesionales y comunidades de desarrolladores. Estoy seguro de mi capacidad y precisión en el manejo de lo siguiente:</p>
            <div className="mt-4">
                <Carousel slides={imagesArray} options={carouselOptions}/>
            </div>
        </div>
        </>
    )
}

export default Skills;