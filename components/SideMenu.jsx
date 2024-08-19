<<<<<<< HEAD
export default function SideMenu() {

    return (
        <>
            <label className="hamburger-menu xl:hidden cursor-pointer fixed top-5 right-7 z-[70]">
                <input type="checkbox" />
            </label>

            <nav className="sidebar w-full max-w-[420px] h-[100dvh] fixed z-[60] bg-slate-900 border-l-4 border-double transition-transform duration-500 flex xl:hidden justify-center right-0">
                <ul className="flex flex-col justify-center items-center text-[3rem] gap-14">
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>01.</span>
                        <a href='#about me'><h3 className='text-gray-300 hover:text-teal-300 ' data-value="SOBRE MIM">SOBRE MIM</h3></a>
                    </li>
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>02.</span>
                        <a href='#experiences'><h3 className='text-gray-300 hover:text-teal-300' data-value="FORMAÇÃO">FORMAÇÃO</h3></a>
                    </li>
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>03.</span>
                        <a><h3 className='text-gray-300 hover:text-teal-300' data-value="MEUS PROJETOS">MEUS PROJETOS</h3></a>
                    </li>
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>04.</span>
                        <a><h3 className='text-gray-300 hover:text-teal-300' data-value="ME CONTATE">ME CONTATE</h3></a>
                    </li>
                    <li>
                        <div className='w-[210px] flex justify-center'>
                            <a href='/Resume.docx'><button className='border-4 rounded-lg border-teal-300 px-2 hover:border-b-8 hover:border-r-8 transition-all'><h3 className='text-gray-300 hover:text-teal-300 cursor-pointer font-HeroFont p-2 bg-gradient-radial hover:from-black hover:to-transparent rounded-lg' data-value="CURRÍCULO">CURRÍCULO</h3></button></a>
                        </div>
                    </li>
                </ul>
            </nav>

        </>
    )
=======
export default function SideMenu() {

    return (
        <>
            <label className="hamburger-menu xl:hidden cursor-pointer fixed top-5 right-7 z-[70]">
                <input type="checkbox" />
            </label>

            <nav className="sidebar w-full max-w-[420px] h-[100dvh] fixed z-[60] bg-slate-900 border-l-4 border-double transition-transform duration-500 flex xl:hidden justify-center right-0">
                <ul className="flex flex-col justify-center items-center text-[3rem] gap-14">
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>01.</span>
                        <a href='#about me'><h3 className='text-gray-300 hover:text-teal-300 ' data-value="SOBRE MIM">SOBRE MIM</h3></a>
                    </li>
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>02.</span>
                        <a href='#experiences'><h3 className='text-gray-300 hover:text-teal-300' data-value="FORMAÇÃO">FORMAÇÃO</h3></a>
                    </li>
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>03.</span>
                        <a><h3 className='text-gray-300 hover:text-teal-300' data-value="MEUS PROJETOS">MEUS PROJETOS</h3></a>
                    </li>
                    <li className="hover:scale-110 transition-all cursor-pointer font-HeroFont leading-[2.5rem] text-center">
                        <span className='text-teal-300'>04.</span>
                        <a><h3 className='text-gray-300 hover:text-teal-300' data-value="ME CONTATE">ME CONTATE</h3></a>
                    </li>
                    <li>
                        <div className='w-[210px] flex justify-center'>
                            <a href='/Resume.docx'><button className='border-4 rounded-lg border-teal-300 px-2 hover:border-b-8 hover:border-r-8 transition-all'><h3 className='text-gray-300 hover:text-teal-300 cursor-pointer font-HeroFont p-2 bg-gradient-radial hover:from-black hover:to-transparent rounded-lg' data-value="CURRÍCULO">CURRÍCULO</h3></button></a>
                        </div>
                    </li>
                </ul>
            </nav>

        </>
    )
>>>>>>> b7e050231fd2f52901f2694ec368c349b8f0fd42
}