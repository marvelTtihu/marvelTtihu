import { Link } from "react-router-dom";

function Navbar() {
    return(
        <header>
            <div className="fixed top-0 left-0 w-full z-50 bg-white">
                <div className="mx-auto max-w-5xl flex justify-between items-center py-6 px-4">
                    <h1 className="bg-linear-to-r from-gray-900 to-slate-400 bg-clip-text text-transparent text-xl md:text-3xl font-space font-bold">MVT.</h1>
                    <nav>
                        <ul className="flex gap-5 md:gap-10 text-base font-semibold font-inter">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
} 

export default Navbar