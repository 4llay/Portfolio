import Titulo from "./titulo";

export default function Projetos() {
    return (
        <div className="flex textShadow text-slate-200 flex-col gap-8 justify-center">
            <Titulo number={"03."} title={"Meus projetos"} />

            <a href="https://github.com/4llay/Cones-Trufados">
                <div className="bg-slate-800 aspect-[4/3] md:aspect-[2/1] relative flex w-[400px] md:w-[700px] rounded-2xl overflow-hidden projetos justify-end">
                    <div className="w-[100%] md:w-[55%] h-[100%] pt-4 pb-7 px-5 flex items-center flex-col leading-relaxed gap-2">
                        <h1 className="text-[2rem] text-center mt-4">Cones Trufadassos</h1>
                        <h1 className="text-slate-400 w-[360px] text-center">Meu projeto de TCC do curso técnico de informatica de 2023. Se trata de uma loja de faz de contas para a venda de cones trufados. Este projeto possui banco de dados com efetuação de login, compras, produtos, etc.</h1>

                        <ul className="mt-5 md:mt-10 flex flex-wrap gap-2 sm:mt-auto">
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">HTML</li>
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Tailwind</li>
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">Type Script</li>
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">mongo DB</li>
                        </ul>
                    </div>
                    <img src="/logoPro.png" className="absolute w-[350px] rounded-2xl left-[-2%] top-0 hidden md:block"></img>
                </div>
            </a>
        </div>
    )
}