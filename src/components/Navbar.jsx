import { Link } from "react-router-dom";

function Navbar() {
    return(
        <header className="fixed top-0 left-0 w-full z-50 bg-white">
            <div className="mx-auto max-w-5xl flex justify-between items-center py-6 px-4">
                <h1 className="text-xl md:text-3xl font-bold">MVT.</h1>
                <nav>
                    <ul className="flex gap-5 md:gap-10 text-base font-semibold font-space">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} 

export default Navbar