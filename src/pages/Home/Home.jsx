import Hero from "./section/Hero"
import Intro from "./section/Intro"
import FeaturedProjects from "./section/FeaturedProjects"
import CTA from "../../components/CTA"

function Home() {
    return(
        <main>
            <Hero />
            <Intro />
            <FeaturedProjects />
            <CTA />
        </main>
    );
}

export default Home