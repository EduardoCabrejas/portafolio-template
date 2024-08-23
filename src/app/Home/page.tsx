import Image from "next/image";
import profile from "@/assets/images/profile 0.png";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="bodyContainer">
        <div className="grid grid-cols-2 gap-x-4 items-center m-auto">
          <div className="overflow-hidden">
            <h1 className="title">Sobre Mi</h1>
            <p className="text">
              Soy Full-Stack Developer, especializado en Front-End, apasionado
              por enfrentar desafíos en el desarrollo de sitios web y proyectos.
              Me destaco en la creación de interfaces de usuario (UI) y
              experiencias de usuario (UX) creativas y atractivas, asegurando
              una interacción fluida y memorable en cada recorrido.
              <br />
              Estoy comprometido con la mejora continua, enfocándome en resolver
              problemas con precisión y rapidez, renovando el aspecto visual y
              cumpliendo con los objetivos establecidos por la empresa.{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={profile}
              alt="Profile Picture"
              className="profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
