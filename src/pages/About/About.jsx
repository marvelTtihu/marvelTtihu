import AboutMe from "./section/AboutMe";
import Resume from "./section/Resume";
import Skills from "./section/Skills";
import CTA from "../../components/CTA";


function About() {
    return(
        <main>
            <AboutMe />
            <Resume />
            <Skills />
            <CTA />
        </main>
    );
}

export default About;