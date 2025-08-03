"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import { imagesArray } from "@/components/Carousel/utils/utils";
import { useIsMobile } from "@/hooks/useIsMobile";
import Carousel from "@/components/Carousel/Carousel";

const carouselOptions: EmblaOptionsType = {
    loop: true,
};

const Skills: FC = () => {
  const isMobile = useIsMobile();
  const MotionWrapper = isMobile ? "div" : motion.div;

return (
        <MotionWrapper
            {...(!isMobile && {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                viewport: { once: true, amount: 0.3 },
            })}
            >
            <div>
                <h1 className="title">Habilidades</h1>
                <p className="text">He aprendido y continuo aprendiendo diversas tecnologías de la programación. Estoy seguro de mi capacidad y precisión en el manejo de lo siguiente:</p>
                <div className="mt-4">
                    <Carousel slides={imagesArray} options={carouselOptions}/>
                </div>
            </div>
        </MotionWrapper>
    )
}

export default Skills;