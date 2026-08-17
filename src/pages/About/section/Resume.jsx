import { FaEnvelope } from 'react-icons/fa'

function Resume() {
    return(
        <section className='border-t-2 border-gray-100 px-6 py-24'>
            <h2 className="mx-auto md:mr-auto md:ml-28 flex items-center text-base gap-2 md:text-lg mb-20 border-2 px-2 py-1 max-w-max rounded-xl font-space"><FaEnvelope /> Resume</h2>
            <div className='flex items-center'>
                <div className="mx-auto px-6 flex flex-col md:flex-row items-start gap-12 md:gap-20">
                    <div className='flex flex-col items-center gap-8 md:gap-12 text-justify max-w-xl w-full'>
                        <h2 className="self-start text-2xl md:text-3xl font-space font-bold">
                            My Experience
                        </h2>
                        <article className='mb-8 md:mb-0 border-l-2 pl-4 flex-1'>
                            <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'><span className='text-blue-600'>Python</span> Developer</h3>
                            <p className='font-semibold font-inter mb-2'>2024</p>
                            <p className='font-inter'>
                                I began my programming journey with Python, the first language I ever learned. It presented a mix of challenges and ease. Through this learning process, I was also introduced to the world of web development. 
                            </p>
                        </article>

                        <article className='mb-8 md:mb-0 border-l-2 pl-4 flex-1'>
                            <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'><span className='text-orange-600'>HTML</span> Developer</h3>
                            <p className='font-semibold font-inter mb-2'>2024-2025</p>
                            <p className='font-inter'>
                                This is where I learned about web development. I really love about web interface, appearance, as well as layout or style.
                            </p>
                        </article>

                        <article className='mb-8 md:mb-0 border-l-2 pl-4 flex-1'>
                            <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'><span className='text-yellow-500'>Full-Stack Web</span> Developer</h3>
                            <p className='font-semibold font-inter mb-2'>2025 - Current</p>
                            <p className='font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </article>
                    </div>
                    <div className='flex flex-col items-center gap-8 md:gap-12 text-justify max-w-xl w-full'>
                        <h2 className='self-start font-bold font-space text-2xl md:text-3xl'>My Education</h2>
                        <article className='mb-8 md:mb-0 border-l-2 pl-4 flex-1'>
                            <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'>High School</h3>
                            <p className='font-semibold font-inter mb-2'>2023 - 2026</p>
                            <p className='font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </article>
                        <article className='mb-8 md:mb-0 border-l-2 pl-4 flex-1'>
                            <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'>Computer Science</h3>
                            <p className='font-semibold font-inter mb-2'>Widya Mandira Catholic University / 2026 - Current</p>
                            <p className='font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Resume;