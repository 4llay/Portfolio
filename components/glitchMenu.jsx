'use client'
import React, { useEffect } from 'react';
import SideMenu from './SideMenu';

export default function GlitchMenu() {

  

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz";
    let intervals = [];
    const menu = document.querySelectorAll("h3")

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
        }, 10);
      }
      a.onmouseout = () => {
        a.innerText = a.dataset.value
      }
    });
  })
  return (
    <div className='justify-center items-center text-[1.8rem] select-none gap-[2rem] hidden xl:flex'>
        <a href='#about me' className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>01.</span><h3 className='text-gray-300 hover:text-teal-300 ' data-value="SOBRE MIM">SOBRE MIM</h3></a>
        <a href='#experiences' className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>02.</span><h3 className='text-gray-300 hover:text-teal-300' data-value="FORMAÇÃO">FORMAÇÃO</h3></a>
        <a href='#projetos' className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>03.</span><h3 className='text-gray-300 hover:text-teal-300' data-value="MEUS PROJETOS">MEUS PROJETOS</h3></a>
        <a href='#contato' className='flex gap-1 hover:scale-110 transition-all cursor-pointer font-HeroFont p-2 rounded-lg'><span className='text-teal-300'>04.</span><h3 className='text-gray-300 hover:text-teal-300' data-value="ME CONTATE">ME CONTATE</h3></a>
    </div>
  )
}
