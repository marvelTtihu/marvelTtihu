import { FaRegFolder } from "react-icons/fa";

function FeaturedProjects() {
    return(
        <section className="min-h-[60vh] border-b-2 py-30">
            <div className="flex justify-center items-center flex-col px-4 space-y-10">
                <div><h2 className="px-2 py-1 border-2 max-w-max rounded-xl flex items-center gap-2 font-space text-base md:text-lg "><FaRegFolder />Works</h2></div>
                <h3 className="text-4xl md:text-6xl font-space font-bold">Featured Projects</h3>
                <ul>
                    <span>Project 1</span>
                    <span>Project 2</span>
                    <span>Project 3</span>
                </ul>
            </div>
        </section>
    );
}

export default FeaturedProjects;