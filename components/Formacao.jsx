<<<<<<< HEAD
import ImageHolder from "./ImageHolder";

export default function Experiences() {
    return (

        <div className="flex textShadow text-slate-200 flex-col gap-8">
            <div className="flex items-center gap-1 text-[2rem]">
                <span className="text-teal-300 font-normal font-sans text-[1.5rem]">02.</span><h1 className="text-nowrap">Formação academica</h1>
                <div className="w-full h-0 border-[1px] border-slate-300 opacity-60"></div>
            </div>

            <div className="flex flex-col gap-[50px] lg:flex-row">
                <div className="w-[600px] aspect-[16/9]">
                    <ImageHolder>
                        <img className="w-full h-full object-cover opacity-60" src="Annes.jpg"></img>
                        <h3 className="z-20 absolute top-[10px] w-full text-center font-HeroFont text-[3rem] select-none" data-value="E.E.M Eng Annes Gualberto">E.E.M Eng Annes Gualberto</h3>
                        <h3 className="z-20 absolute top-[60px] text-slate-300 w-full text-center font-HeroFont text-[1.7rem] select-none" data-value="Data de término 2023">Data de término 2023</h3>
                    </ImageHolder>
                </div>
                <div className="w-[600px] aspect-[16/9]">
                    <ImageHolder>
                        <img className="w-[150%] h-[125%] object-cover opacity-60 absolute" src="dino.png"></img>
                        <h3 className="z-20 absolute top-[10px] w-full text-center font-HeroFont text-[3rem] select-none" data-value="Curso tecnico de informatica">Curso tecnico de informatica</h3>
                        <h3 className="z-20 absolute top-[60px] text-slate-300 w-full text-center font-HeroFont text-[1.7rem] select-none" data-value="Data de término 2023">Data de término 2023</h3>
                    </ImageHolder>
                </div>
            </div>
        </div>
    )
=======
import ImageHolder from "./ImageHolder";

export default function Experiences() {
    return (

        <div className="flex textShadow text-slate-200 flex-col gap-8">
            <div className="flex items-center gap-1 text-[2rem]">
                <span className="text-teal-300 font-normal font-sans text-[1.5rem]">02.</span><h1 className="text-nowrap">Formação academica</h1>
                <div className="w-full h-0 border-[1px] border-slate-300 opacity-60"></div>
            </div>

            <div className="flex flex-col gap-[50px] lg:flex-row">
                <div className="w-[600px] aspect-[16/9]">
                    <ImageHolder>
                        <img className="w-full h-full object-cover opacity-60" src="Annes.jpg"></img>
                        <h3 className="z-20 absolute top-[10px] w-full text-center font-HeroFont text-[3rem] select-none" data-value="E.E.M Eng Annes Gualberto">E.E.M Eng Annes Gualberto</h3>
                        <h3 className="z-20 absolute top-[60px] text-slate-300 w-full text-center font-HeroFont text-[1.7rem] select-none" data-value="Data de término 2023">Data de término 2023</h3>
                    </ImageHolder>
                </div>
                <div className="w-[600px] aspect-[16/9]">
                    <ImageHolder>
                        <img className="w-[150%] h-[125%] object-cover opacity-60 absolute" src="dino.png"></img>
                        <h3 className="z-20 absolute top-[10px] w-full text-center font-HeroFont text-[3rem] select-none" data-value="Curso tecnico de informatica">Curso tecnico de informatica</h3>
                        <h3 className="z-20 absolute top-[60px] text-slate-300 w-full text-center font-HeroFont text-[1.7rem] select-none" data-value="Data de término 2023">Data de término 2023</h3>
                    </ImageHolder>
                </div>
            </div>
        </div>
    )
>>>>>>> b7e050231fd2f52901f2694ec368c349b8f0fd42
}