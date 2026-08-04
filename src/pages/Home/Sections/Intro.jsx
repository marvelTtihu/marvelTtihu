import { Link } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";
import { VscDeveloperTools } from "react-icons/vsc";


function Intro() {
    return(
        <section className="min-h-[60vh] border-b-2 py-30">
            <div className="max-w-5xl mx-auto px-4 flex flex-col space-y-12">
                <div>
                    <h2 className="border-2 px-2 py-1 font-space text-base md:text-lg rounded-xl max-w-max flex items-center gap-2"><FaAddressBook />Intro</h2>
                    <div className="border-l-2 pl-4 mt-6">
                        <p className="max-w-4xl font-inter text-3xl md:text-5xl leading-tight">
                            I'm a web developer focused on building responsive, 
                            high-performing websites and functional applications
                            with a clean design and friendly user experiences...
                            <Link to='/about' className="inline-block text-base md:text-lg underline underline-offset-4 ml-2">More about me →</Link>
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="border-2 px-2 py-1 font-space text-base md:text-lg rounded-xl max-w-max flex items-center gap-2"><VscDeveloperTools />Tech</h2>
                    <div className="mt-6 flex flex-wrap gap-4">
                    <span className="border-l-2 px-2 py-1 font-inter text-2xl md:text-4xl bg-orange-200">HTML5</span>
                    <span className="border-l-2 px-2 py-1 font-inter text-2xl md:text-4xl bg-purple-200">CSS3</span>
                    <span className="border-l-2 px-2 py-1 font-inter text-2xl md:text-4xl bg-blue-200">React</span>
                    <span className="border-l-2 px-2 py-1 font-inter text-2xl md:text-4xl bg-yellow-200">Node.js</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;