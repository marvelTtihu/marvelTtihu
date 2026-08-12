import Profile from "../../../assets/Profile.jpeg"

function AboutMe() {
    return(
        <section>
            <div className="py-28 min-h-[60vh]">
                <div className="w-full max-w-6xl mx-auto p-4">
                    <div className="flex flex-col items-center">
                        <h2 className="font-space font-bold text-4xl md:text-6xl mb-12">About</h2>
                        <div className="flex flex-col md:flex-row gap-12 items-start border-2 border-gray-200 shadow-lg p-10 rounded-xl">
                            <img src={Profile} alt="Profile Picture" className="w-120 h-120 object-cover rounded-xl"/>
                            <div className="flex flex-col items-start gap-6">
                                <div className="flex flex-col text-justify gap-4">
                                    <p className="text-2xl md:text-3xl font-inter">
                                        <span className="font-bold">I'm Marvel.</span> I'm a web developer focused on building responsive, high-performing websites and functional applications with a clean design and friendly user experiences.
                                    </p>
                                    <p className="text-2xl md:text-3xl font-inter mt-4">
                                        My tech journey actually started with Python and AI/ML, which gave me a solid analytical foundation and sharp problem-solving skills before I found my true passion in full-stack development.
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                                        <a href="#" className="font-inter inline-block mt-4 self-start bg-black text-white px-6 py-3 rounded-lg font-bold">
                                        Download CV
                                        </a>
                                        <dl className="flex gap-10">
                                            <div className="font-space font-bold">
                                                <dt className="text-2xl md:text-3xl">2+</dt>
                                                <dd>Years of experience</dd>
                                            </div>
                                            <div className="font-space font-bold">
                                                <dt className="text-2xl md:text-3xl">15+</dt>
                                                <dd>Project completed</dd>
                                            </div>
                                        </dl>
                                    </div>
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