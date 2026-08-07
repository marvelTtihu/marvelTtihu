import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
    return(
        <footer>
            <div className="bg-gray-50 mx-auto py-6 px-20 w-full">
                <div className="flex flex-col items-center md:flex-row md:justify-between gap-2">
                    <p className="font-inter text-gray-600 ">&copy;2026 MVT, All Rights Reserved</p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/marvelt_" className="flex items-center gap-1 font-inter"><FaInstagram />Instagram</a>
                        <a href="https://x.com/TihuMarvel" className="flex items-center gap-1 font-inter"><FaTwitter />Twitter</a>
                        <a href="https://github.com/marvelTtihu" className="flex items-center gap-1 font-font inter"><FaGithub />Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;