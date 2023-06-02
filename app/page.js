import Image from 'next/image'
import styles from '../styles/globals.css'
import Head from 'next/head'
import {BsFillMoonFill} from 'react-icons/bs';

import {DiGithubFull} from 'react-icons/di'
import {AiOutlineCodepen, AiOutlineTwitter, AiFillGithub} from 'react-icons/ai'




export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 ">
        <section className='min-h-screen'> 
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'> devlop</h1>
            <ul className='flex justify-center'>
              <li>
                <BsFillMoonFill className='cursor-pointer text-xl'/>
              </li>
              <li href='#'>
                <a className='bg-gradient-to-r from-blue-400 to-purple-400 px-4 py-2 rounded-md ml-8'>RESUME</a>
              </li>
            </ul>
          </nav>
          <div>
            <h2>WAFAE HAMDAOUI</h2>
            <h3>Developer & Designer.</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</p>
          </div>
          <div>
          <AiOutlineTwitter/>
          
            <DiGithubFull/>
            <AiOutlineCodepen className='rounded-md'/>
          </div>
        </section>
      </main> 
    </div>


  )
}
