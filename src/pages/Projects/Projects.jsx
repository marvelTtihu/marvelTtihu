import { Link } from "react-router-dom";

function Projects() {
    return(
        <section id="projects" className="w-full py-40 scroll-mt-20">
            <div className="mx-auto w-full max-w-4xl">
                <div className="flex items-center flex-col gap-10 p-20 border-1 rounded-xl shadow-[15px_11px_0px_0px_#1a202c]">
                   <div className="text-center">
                    <h1 className="text-4xl pb-2 uppercase font-bold font-space">Projects</h1>
                    <h1 className="font-inter">Here are some of the projects I've worked on. Click below to see more details.</h1>
                    </div>
                    <div className="border-2 px-4 py-2 rounded-2xl font-bold outline-none">
                        <Link to="/projectdetails">View all</Link> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects