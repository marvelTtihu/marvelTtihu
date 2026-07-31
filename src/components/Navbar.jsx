import { Link } from "react-router-dom";

function Navbar() {
    return(
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-xl">
            <div className="mx-auto max-w-5xl flex justify-between items-center py-6 px-4">
                <h1 className="text-xl md:text-3xl font-bold">MVT.</h1>
                <nav>
                    <ul className="flex gap-5 md:gap-10 text-base font-semibold">
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
                <a href="#contact" className="inline-block border-2 px-4 py-2 rounded-2xl">Contact Me</a>
            </div>
        </header>
    );
} 

export default Navbar