import Profile from "../../../assets/Profile.png"

function AboutMe() {
    return(
        <section>
            <div className="py-28 min-h-[60vh]">
                <div className="w-full max-w-6xl mx-auto p-4">
                    <div className="flex items-center flex-col">
                    <h2 className="font-space text-4xl text-6xl mb-12 font-bold">About me.</h2>
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <img src={Profile} alt="Profile Picture" className="w-128 h-128 object-cover rounded-xl"/>
                            <p className="text-2xl md:text-3xl"><span className="font-bold">The name's Marvel,</span> I'm a web developer focused on building responsive, high-performing websites and functional applications with a clean design and friendly user experiences. I am trying to be better.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;