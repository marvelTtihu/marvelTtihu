import { FaEnvelope } from 'react-icons/fa'

function Experience() {
    return(
        <section>
            <div className="mx-auto px-6 py-24 max-w-6xl">
                <h2 className="mx-auto flex items-center text-base gap-2 md:text-lg mb-4 border-2 px-2 py-1 max-w-max rounded-xl font-space"><FaEnvelope /> Resume</h2>
                <h2 className="text-center mb-12 text-3xl md:text-5xl font-space">
                    My Experience
                </h2>

                <article>
                    <h3>Full-Stack Web Developer</h3>
                    <p>2025 - Current</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </article>

                <article>
                    <h3>HTML Developer</h3>
                    <p>2024-2025</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </article>

                <article>
                    <h3>Python Developer</h3>
                    <p>2024</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </article>
            </div>
        </section>
    );
}

export default Experience;