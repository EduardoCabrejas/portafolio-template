import AboutMe from "./AboutMe/page";
import { Suspense } from "react";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader/>}
      >
          <section id="about-me" className="area">
            <AboutMe />
          </section>
          <section id="skills" className="area">
            <Skills />
          </section>
          <section id="projects" className="mt-8">
          <Projects />
          </section>
      </Suspense>
    </>
  );
}
