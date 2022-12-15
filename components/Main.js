import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

/* eslint-disable react/no-unescaped-entities */
function Main() {
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600'>
						LET'S BUILD SOMETHING TOGETHER
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I'm <span className='text-[#5651e5]'>Sean</span>
					</h1>
					<h1 className='py-2 text-gray-700'>
						A Full-Stack & Blockchain Developer
					</h1>
					<p>
						I'm a Web Developer specializing in building full-stack applications
						on and off the blockchain. I'm currently working to obtain an AWS
						Cloud Practitioner certification so I can provide more value and
						assistance to those I work with.
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaLinkedinIn />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaGithub />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<AiOutlineMail />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Main;
