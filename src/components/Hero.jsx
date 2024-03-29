import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (

 <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt="" className='w-28 object-contain' />
          <a href="https://portfoliomohammedalwaki.netlify.app/" target="_blank">
            <button className='black_btn'>Portfolio</button>
          </a>
        </nav>

        <div className="head_text">Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient'>Open-AI GPT-4</span></div>

        <h2 className='desc'>
            Simplify your reading with DEV-AI, an article summarizer what transforms lengthy articles into clear and concise summaries
        </h2>
      </header>

  );
}

export default Hero;
