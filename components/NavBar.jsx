<<<<<<< HEAD
'use client'

import SideMenu from "./SideMenu";
import GlitchMenu from "./glitchMenu";

export default function NavBar() {
    return (
        <div>
            <header className="flex fixed border-b-4 border-double justify-between px-[2rem] items-center w-screen h-[100px] z-50 bg-slate-900 backdrop-blur-lg bg-opacity-50">
                <a href="#hero"><img src="/logo.png" width={80} className="select-none" /></a>
                <div>
                    <GlitchMenu />
                </div>
            </header>
            <SideMenu />
        </div>
    )
=======
'use client'

import SideMenu from "./SideMenu";
import GlitchMenu from "./glitchMenu";

export default function NavBar() {
    return (
        <div>
            <header className="flex fixed border-b-4 border-double justify-between px-[2rem] items-center w-screen h-[100px] z-50 bg-slate-900 backdrop-blur-lg bg-opacity-50">
                <a href="#hero"><img src="/logo.png" width={80} className="select-none" /></a>
                <div>
                    <GlitchMenu />
                </div>
            </header>
            <SideMenu />
        </div>
    )
>>>>>>> b7e050231fd2f52901f2694ec368c349b8f0fd42
}