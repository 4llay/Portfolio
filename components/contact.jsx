import Titulo from "./titulo";

export default function Contact() {
    return (
        <div className="flex textShadow text-slate-200 flex-col justify-center">
            <Titulo number={"04."} title={"Me Contate"} />
            <div className="flex flex-col gap-8 items-center">
                <p className="text-slate-400 w-[380px] md:w-[500px] text-center">Estou sempre em busca de novas oportunidades e colaborações. Se você tem um projeto em mente ou gostaria de conversar, entre em contato! Será um prazer responder!</p>
                <a href="mailto:jpcgprof@gmail.com"><button className='border-2 rounded-lg w-[200px] text-[1.8rem] border-teal-300 px-2 hover:border-b-8 hover:border-r-8 transition-all'><h3 className='text-gray-300 hover:text-teal-300 cursor-pointer font-HeroFont p-2 rounded-lg' data-value="Diga Oi Aqui!">Diga Oi Aqui!</h3></button></a>
            </div>
        </div>
    )
}