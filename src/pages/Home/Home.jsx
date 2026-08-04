import Hero from "./Sections/Hero"
import Intro from "./Sections/Intro"
import FeaturedProjects from "./Sections/FeaturedProjects"

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