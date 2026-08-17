import Profile from "../../../assets/Profile.jpeg"
import { MdOutlineQuestionMark } from "react-icons/md";

function AboutMe() {
    return(
        <section>
            <div className="py-28 min-h-[60vh]">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="font-space font-bold text-4xl md:text-6xl mb-20">About</h2>
                        <div className="flex flex-col md:flex-row gap-16 items-start md:border-2 md:border-gray-200 md:shadow-lg p-10 md:rounded-xl">
                            <img src={Profile} alt="Profile Picture" className="w-80 h-80 md:w-120 md:h-120 object-cover rounded-xl self-center md:self-start"/>
                            <div className="flex flex-col items-start gap-6 w-full">
                                <h3 className="text-base md:text-lg border-2 px-2 py-1 max-w-max rounded-xl font-space flex items-center gap-2"><MdOutlineQuestionMark />Who am I</h3>
                                <h4 className="text-2xl md:text-4xl font-inter font-bold">I'm Marvel, a Fullstack Web Developer
                                </h4>
                                <p className="text-lg md:text-xl font-inter text-justify">
                                    I am a developer focused on building responsive, high-performing websites and functional applications with a clean design and friendly user experiences. My tech journey actually started with Python and AI/ML, which gave me a solid analytical foundation and sharp problem-solving skills before I found my true passion in full-stack development. Therefore, I will continue my journey as a web developer and keep learning, learning, and learning.
                                </p>
                                <p className="font-bold font-space text-xl mt-2">I want to be a better person.</p>
                                <a href="#" className="font-inter inline-block self-center md:self-start bg-black text-white px-8 py-2 rounded-2xl font-bold mt-8">
                                Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;