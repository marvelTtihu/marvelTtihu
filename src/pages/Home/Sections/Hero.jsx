function Hero() {
    return(
        <section className="relative min-h-dvh flex justify-center items-center border-b-2">
            <div className="text-center space-y-6">
                <h1 className="font-space text-6xl md:text-8xl font-bold">
                MARVEL TIHU
                </h1>
                <p className="font-inter text-lg md:text-xl">Web developer</p>
                <a href="#projects" className="inline-block px-4 py-2 bg-black text-white rounded-xl">View Projects →</a>
            </div>
            <div className="absolute bottom-12 pl-2">
                <p className="text-base md:text-lg font-inter">Get to know me ↓</p>
            </div>
        </section>
    );
}

export default Hero