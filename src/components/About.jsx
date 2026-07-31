function About() {
    return(
        <section id="about" className="py-20 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 bg-white-200">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold">About me.</h4>
                        <p>The name's Marvel Tihu, I'm a full-stack developer with a passion for creating innovative digital solutions. I specialize in web development and software development, and I'm always eager to learn new skills and technologies.</p>
                    </div>
                    <span className="border-l-2"></span>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold">Tech Stack.</h4>
                        <div className="grid grid-rows-2">  
                            <div>HTML5 & CSS3</div>
                            <div>Javascript (ES6+)</div>
                            <div>React.js</div>
                            <div>Tailwind CSS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About