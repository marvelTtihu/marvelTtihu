function Hero() {
    return(
        <section className="min-h-dvh flex justify-center items-center border-b-2">
            <div className="text-center space-y-6">  
                <h1 className="font-space text-2xl md:text-4xl">What's good, I am</h1>
                <h1 className="font-space text-6xl md:text-8xl font-bold">
                MARVEL TIHU
                </h1>
                <p className="font-inter text-lg md:text-xl">Full-Stack Developer · Web Developer</p>
                <a href="#project" className="inline-block px-4 py-2 bg-black text-white rounded-xl">View My Projects!</a>
            </div>
        </section>
    );
}

export default Hero