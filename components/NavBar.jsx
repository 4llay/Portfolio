'use client'

import SideMenu from "./SideMenu";
import GlitchMenu from "./glitchMenu";

export default function NavBar() {
    return (
        <div>
            <header className="flex fixed border-b-4 border-double justify-around px-[2rem] items-center w-screen h-[100px] z-50 bg-slate-900 backdrop-blur-lg bg-opacity-50">
                <a href="#hero" className="absolute left-7 xl:static"><img src="/logo.png" width={80} className="select-none" /></a>
                <GlitchMenu />
                <div className='w-[100px] flex justify-center'>
                    <a href='/Resume.pdf' className="hidden sm:block"><button className='border-2 rounded-lg  text-[1.8rem] border-teal-300 px-2 hover:border-b-8 hover:border-r-8 transition-all '><h3 className='text-gray-300 hover:text-teal-300 cursor-pointer font-HeroFont p-2 bg-gradient-radial hover:from-black hover:to-transparent rounded-lg' data-value="CURRÍCULO">CURRÍCULO</h3></button></a>
                </div>
            </header>
            <SideMenu />
        </div>
    )
}