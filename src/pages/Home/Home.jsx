import Hero from "./sections/Hero"
import Intro from "./sections/Intro"
import FeaturedProjects from "./sections/FeaturedProjects"

function Home() {
    return(
        <main>
            <Hero />
            <Intro />
            <FeaturedProjects />
        </main>
    );
}

export default Home