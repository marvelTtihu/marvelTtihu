import { FaRegFolder } from "react-icons/fa";
import { projects } from "../../../data/projects";

function FeaturedProjects() {
    const featuredProjects = projects.filter(project => project.featured);



    return(
        <section className="min-h-[60vh] border-b-2 py-30">
            <div className="flex justify-center items-center flex-col px-4 space-y-10">
                <div>
                    <h2 className="px-2 py-1 border-2 max-w-max rounded-xl flex items-center gap-2 font-space text-base md:text-lg ">
                        <FaRegFolder />Works
                    </h2>
                </div>
                <h3 className="text-4xl md:text-6xl font-space font-bold">Featured Projects</h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {featuredProjects.map((project) => (
                        <li key={project.id} className="group overflow-hidden rounded-xl">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="rounded-xl w-full h-full object-contain 
                                transition-transform duration-500 group-hover:scale-[1.02]"/>
                            </div>
                            <div className="p-3">
                                <h4 className="font-space font-semibold text-2xl">
                                {project.title}
                                </h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            </section>
        );
}

export default FeaturedProjects;