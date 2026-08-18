import { VscDeveloperTools } from "react-icons/vsc";

function Skills() {
    return(
        <section className="px-6 py-24 mx-auto w-full max-w-7xl">
            <p className="border-2 px-2 py-1 font-space text-base md:text-lg rounded-xl max-w-max flex items-center gap-2 mb-2"><VscDeveloperTools /> Tech</p>
            <h2 className="text-2xl md:text-4xl text-bold font-bold font-space mb-2">My Skills</h2>
            <p>Here's what I know</p>
            <article>
                <h3>Frontend</h3>
                <div>
                    <p>HTML/CSS</p>
                    <p>Javascript</p>
                    <p>React.js</p>
                </div>
            </article>
            <article>
                <h3>Backend</h3>
                <div>
                    <p>Python</p>
                    <p>Node.js</p>
                </div>
            </article>
        </section>
    );
}

export default Skills