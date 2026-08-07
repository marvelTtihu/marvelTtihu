import { Link } from "react-router-dom";

function CTA() {
    return(
        <section className="border-t-2 border-gray-100 py-28">
            <div className="mx-auto max-w-2xl flex flex-col items-center gap-2 p-4">
                <h4 className="font-space font-medium text-4xl md:text-6xl mb-2">Let's work</h4>
                <div className="flex items-center gap-4 w-full justify-center">
                    <h4 className="font-space text-gray-600 text-3xl md:text-5xl">Together</h4>
                    <span className="border-b-2 flex-grow border-gray-300"></span>
                    <Link to="/contact" className="text-xl md:text-3xl font-inter bg-black text-white px-4 py-2 rounded-4xl">React me out! →</Link>
                </div>
            </div>
        </section>
    );
}

export default CTA