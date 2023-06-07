import Image from 'next/image'
import styles from '../styles/globals.css'
import Head from 'next/head'
import {BsFillMoonFill} from 'react-icons/bs';
import {FaLinkedinIn, FaGithubAlt} from 'react-icons/fa'
import {AiOutlineCodepen, AiOutlineTwitter} from 'react-icons/ai'
import {GiAstronautHelmet} from 'react-icons/gi'

import skill from '../public/skills.png'


export default function Home() {
  const iconStyling = 'bg-gradient-to-r from-blue-300 to-purple-500 text-black rounded-md ';
  const shadowColor = 'rgba(128, 0, 128, 0.5)';
  return (
    <div>

      <main className="bg-black px-10 ">
        <section className='min-h-screen'> 
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-white font-mono-space'> DEVELOPEDBY</h1>
            <ul className='flex justify-center'>
              <li>
                <BsFillMoonFill className='cursor-pointer text-xl text-purple-100'/>
              </li>
              <li href='#'>
                <a className='font-semibold bg-gradient-to-r from-blue-300 to-purple-500 px-4 py-2 rounded-md ml-8'>RESUME</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='font-semibold text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500'>WAFAE HAMDAOUI</h2>
          <div className=' flex justify-center p-10'>
            <GiAstronautHelmet className='text-9xl text-center bg-gradient-to-r from-blue-300 to-purple-500 text-black rounded-md '/>
          </div>             
            <h3 className='text-2xl py-3 text-white'>Developer & Designer.</h3>
            <p className='text-sm py-5 leading-8  text-gray-300'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</p>
          </div>   
        </section>
        <section>
          <div>
            <h3 className='text-gray-200 text-2xl py-2'></h3>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center p-10 my-10 rounded-xl  flex-1' style={{
              boxShadow: `0 15px 15px -3px ${shadowColor}, 0 4px 6px -4px ${shadowColor}`}}>
              <h3 className='font-semibold text-3xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 rounded-md opacity-80'>SKILLS</h3>
              <Image
              src={skill} width={500} height={500}
              alt="skill" 
              className='flex justify-center items-center py-5'
              />
            </div>
          </div>

        </section>
        <section>
        <div className='text-3xl flex justify-center gap-16 py-3'>
            <AiOutlineTwitter className={iconStyling}/>
            <FaLinkedinIn className={iconStyling}/>
            <FaGithubAlt className={iconStyling}/>
            <AiOutlineCodepen className={iconStyling}/>
          </div>
        </section>
      </main> 
    </div>


  )
}
