import { Link } from "react-router-dom";

function CTA() {
    return(
        <section className="border-t-2 border-gray-100 py-32">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center justify-between gap-8 p-4">
                <div className="max-w-xl">
                    <h4 className="font-space font-bold text-3xl md:text-5xl mb-2">Let's work together</h4>
                    <p className="font-inter text-slate-600">I look forward to collaborating with you. Feel free to reach out if you need any clarification.</p>
                </div>
                <div>
                    <Link to="/contact" className="text-xl md:text-3xl font-inter underline underline-offset-6">React me out!</Link>
                </div>
            </div>
        </section>
    );
}

export default CTA