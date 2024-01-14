'use client'
import React, { useEffect } from 'react';

export default function GlitchMenu() {

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz";
    let intervals = [];
    const menu = document.querySelectorAll("h1")

    menu.forEach((a, index) => {
      a.onmouseenter = event => {
        
        let iteration = 0;
        clearInterval(intervals[index]);

        intervals[index] = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 51)]
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(intervals[index]);
          }

          iteration += 1 / 3;
        }, 20);
      }
      a.onmouseout = () => {
        a.innerText = a.dataset.value
      }
    });
  })
  return (
    <div className='flex justify-center items-center text-[1.8rem] select-none gap-[2rem]'>
      <a href='#about me' className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>01.</span><h1 className='text-gray-300 hover:text-teal-300 ' data-value="SOBRE MIM">SOBRE MIM</h1></a> 
      <a className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>02.</span><h1 className='text-gray-300 hover:text-teal-300' data-value="EXPERIENCIAS">EXPERIENCIAS</h1></a> 
      <a className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>03.</span><h1 className='text-gray-300 hover:text-teal-300' data-value="MEUS PROJETOS">MEUS PROJETOS</h1></a> 
      <a className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>04.</span><h1 className='text-gray-300 hover:text-teal-300' data-value="ME CONTATE">ME CONTATE</h1></a>
      <div className='w-[150px] flex justify-center'>
      <a href='/Resume.docx'><button className='border-2 rounded-lg border-teal-300 px-2 hover:border-b-8 hover:border-r-8 transition-all '><h1 className='text-gray-300 hover:text-teal-300 cursor-pointer font-HeroFont p-2 bg-gradient-radial hover:from-black hover:to-transparent rounded-lg' data-value="CURRÍCULO">CURRÍCULO</h1></button></a>
      </div>
    </div>
  )
}
