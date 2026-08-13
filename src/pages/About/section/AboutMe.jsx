import Profile from "../../../assets/Profile.jpeg"

function AboutMe() {
    return(
        <section>
            <div className="py-28 min-h-[60vh]">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="font-space font-bold text-4xl md:text-6xl mb-12">About</h2>
                        <div className="flex flex-col md:flex-row gap-12 items-start md:border-2 md:border-gray-200 md:shadow-lg p-10 md:rounded-xl">
                            <img src={Profile} alt="Profile Picture" className="w-80 h-80 md:w-120 md:h-120 object-cover rounded-xl self-center"/>
                            <div className="flex flex-col items-start text-justify gap-4 w-full">
                                <p className="text-xl md:text-2xl font-inter">
                                    <span className="font-bold">I'm Marvel.</span> I'm a web developer focused on building responsive, high-performing websites and functional applications with a clean design and friendly user experiences.
                                </p>
                                <p className="text-xl md:text-2xl font-inter">
                                    My tech journey actually started with Python and AI/ML, which gave me a solid analytical foundation and sharp problem-solving skills before I found my true passion in full-stack development.
                                </p>
                                <p className="font-bold font-space text-xl self-center mt-2">I want to be a better person.</p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mt-14 w-full">
                                    <a href="#" className="font-inter inline-block mt-4 self-center md:self-start bg-black text-white px-6 py-3 rounded-lg font-bold">
                                    Download CV
                                    </a>
                                    <dl className="flex flex-wrap gap-10">
                                        <div className="font-space font-bold">
                                            <dt className="text-2xl md:text-3xl bg-black text-white max-w-max py-1 px-2 rounded-xl">1.5+</dt>
                                            <dd>Years of experience</dd>
                                        </div>
                                        <div className="font-space font-bold">
                                            <dt className="text-2xl md:text-3xl bg-black text-white max-w-max py-1 px-2 rounded-xl">15+</dt>
                                            <dd>Projects completed</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;