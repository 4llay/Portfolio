import GlitchMenu from "./glitchMenu";

export default function NavBar() {
    return (
        <header className="flex fixed border-b-4 border-double justify-between px-[2rem] items-center w-screen h-[5dvw] z-50 bg-slate-900 backdrop-blur-lg bg-opacity-50">
            <a href="#hero"><img src="/uwu.png" width={100} className="select-none" /></a>
            <div>
                <GlitchMenu />
            </div>
        </header>
    )
}