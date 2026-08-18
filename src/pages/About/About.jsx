import AboutMe from "./section/AboutMe";
import Resume from "./section/Resume";
import CTA from "../../components/CTA";

function About() {
    return(
        <main>
            <AboutMe />
            <Resume />
            <CTA />
        </main>
    );
}

export default About;