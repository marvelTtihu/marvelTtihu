import { VscDeveloperTools } from "react-icons/vsc";

function Skills() {
    return(
        <section className="px-6 py-24 mx-auto w-full max-w-7xl">
            <p className="border-2 px-2 py-1 font-space text-base md:text-lg rounded-xl max-w-max flex items-center gap-2 mb-4"><VscDeveloperTools /> Tech</p>
            <h2 className="text-2xl md:text-4xl text-bold font-bold font-space mb-8">My Skills</h2>
            <section className="flex flex-col md:flex-row gap-24">
                <article className="flex-1 flex flex-col gap-2 items-center rounded-xl shadow-md border border-gray-200 p-4">
                    <h3 className="mb-4 font-space font-bold text-xl md:text-2xl">Frontend</h3>
                    <div className="flex gap-4 font-inter text-lg md:text-xl">
                        <p className="bg-orange-200 px-4">HTML</p>
                        <p className="bg-yellow-200 px-4">Javascript</p>
                        <p className="bg-blue-200 px-4">React.js</p>
                    </div>
                </article>
                <article className="flex-1 flex flex-col items-center gap-2 bg-black text-white shadow-md rounded-xl p-4">
                    <h3 className="mb-4 font-space font-bold text-xl md:text-2xl">Backend</h3>
                    <div className="flex gap-4 font-inter text-lg md:text-xl">
                        <p className="bg-blue-500 px-4">Python</p>
                        <p className="bg-yellow-500 px-4">Node.js</p>
                    </div>
                </article>
            </section>
        </section>
    );
}

export default Skills