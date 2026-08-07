import Hero from "./sections/Hero"
import Intro from "./sections/Intro"
import FeaturedProjects from "./sections/FeaturedProjects"
import CTA from "./sections/CTA"

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