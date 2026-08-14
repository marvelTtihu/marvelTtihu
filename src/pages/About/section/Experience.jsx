import { FaEnvelope } from 'react-icons/fa'

function Experience() {
    return(
        <section>
            <div className="mx-auto px-6 py-24 max-w-6xl">
                <h2 className="mx-auto flex items-center text-base gap-2 md:text-lg mb-4 border-2 px-2 py-1 max-w-max rounded-xl font-space"><FaEnvelope /> Resume</h2>
                <h2 className="text-center mb-20 text-3xl md:text-5xl font-space">
                    My Experience
                </h2>
                <div className='border-l-2 px-4 flex flex-col md:flex-row text-justify'>
                    <article className='mb-8 md:mb-0 md:mr-4'>
                        <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'>Full-Stack Web Developer</h3>
                        <p className='font-semibold font-inter mb-2'>2025 - Current</p>
                        <p className='font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </article>

                    <article className='mb-8 md:mb-0 md:mr-4 md:border-l-2 md:px-4'>
                        <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'>HTML Developer</h3>
                        <p className='font-semibold font-inter mb-2'>2024-2025</p>
                        <p className='font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </article>

                    <article className='md:border-l-2 md:px-4'>
                        <h3 className='text-xl md:text-2xl mb-2 font-space font-bold'>Python Developer</h3>
                        <p className='font-semibold font-inter mb-2'>2024</p>
                        <p className='font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Experience;