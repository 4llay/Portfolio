import ImageHolder from "./ImageHolder";
import Titulo from "./titulo";

export default function AboutMe() {
    return (
        <div className="flex flex-col textShadow">
            <div className="text-white flex items-center gap-24">
                <div className="flex flex-col gap-2 w-[40dvw]">
                    <Titulo number={"01."} title={"Sobre mim"}/>
                    <div className="text-[1.2rem] text-balance flex flex-col gap-8">
                        <p><span className="text-teal-300">OI!</span> Eu me chamo <span className="text-teal-300">João Paulo</span> e eu amo criar sites e jogos com os melhores efeitos e mecanicas que eu conseguir imaginar. Eu sempre tive esse interesse desde pequeno, sempre imaginando coisas que fariam os jogos que eu ja conhecia mais divertidos, mas so começei essa paixão em <span className="text-teal-300">2020</span> quando criei meu primeiro site <span className="text-teal-300">HTML!</span></p>
                        <p>Voltando aos dias atuais, eu ja tenho uma boa experiencia na <span className="text-teal-300">criação de websites</span> mas ainda tenho muito a que aprender, principalmente quando se trata de <span className="text-teal-300">banco de dados</span> ,_,</p>
                        <p>No momento estou buscando <span className="text-teal-300">oportunidades de trabalho </span> para ganhar <span className="text-teal-300"> experiencia </span> <span className="text-[.6rem]"> e dinheiro</span></p>
                        <p>Eu ja trabalhei com estas tecnologias: </p>
                    </div>
                    <div className="grid grid-cols-2 w-[620px]">
                        <p><i aria-hidden className="fa-solid fa-caret-right text-teal-300"></i> HTML</p>
                        <p><i aria-hidden className="fa-solid fa-caret-right text-teal-300"></i> CSS</p>
                        <p><i aria-hidden className="fa-solid fa-caret-right text-teal-300"></i> Tailwind</p>
                        <p><i aria-hidden className="fa-solid fa-caret-right text-teal-300"></i> Next.js</p>
                        <p><i aria-hidden className="fa-solid fa-caret-right text-teal-300"></i> JavaScript</p>
                        <p><i aria-hidden className="fa-solid fa-caret-right text-teal-300"></i> TypeScript</p>
                    </div>
                </div>
                <div className="w-[400px] aspect-[10/16]">
                <ImageHolder>
                        <h3 className="z-20 absolute bottom-10 w-full text-center font-HeroFont text-[5rem] select-none" data-value="João Paulo">João Paulo</h3>
                        <img src="/Eu2.jpg" className="select-none object-cover opacity-60 w-full h-full" />
                </ImageHolder>
                </div>
            </div>
        </div>
    )
}