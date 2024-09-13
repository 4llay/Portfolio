import "@/components/mouseBlob"
import "@/components/animateOnScroll"
import AboutMe from "@/components/AboutMe"
import HeroSection from "@/components/HeroSection"
import NavBar from "@/components/NavBar"
import Formacao from "@/components/Formacao"
import Projetos from "@/components/Projetos"
import Contact from "@/components/contact"

export default function Home() {

  return (
    <main className='w-[100dvw] h-[100dvh] relative overflow-x-hidden'>
      <NavBar />

      <a id="hero" />
      <div suppressHydrationWarning className="flex justify-center items-center relative w-screen h-screen animateOnScroll">
        <HeroSection />
      </div>

      <br id="about me" /><br />
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center animateOnScroll">
        <AboutMe />
      </div>

      <br id="experiences" /><br />
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center animateOnScroll">
        <Formacao />
      </div>

      <br id="projetos" /><br />
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center animateOnScroll">
        <Projetos />
      </div>

      <br id="contato" /><br />
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center animateOnScroll">
        <Contact />
      </div>

      {/* barra social(esquerda) */}
      <div className="w-[40px] h-[340px] hidden xl:flex fixed bottom-0 left-14 flex-col justify-end items-center gap-8">
        <ul className="flex flex-col gap-8">
          <li>
            <a href="https://github.com/4llay/" target="_blank">
              <i className="fa-brands fa-github text-slate-200 text-[2.5rem] hover:text-teal-300 hover:scale-110 transition-all duration-500" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5548996306122" target="_blank">
              <i className="fa-brands fa-whatsapp text-slate-200 text-[2.9rem] hover:text-teal-300 hover:scale-110 transition-all duration-500" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joão-paulo-de-carvalho-guimarães-a9726031a/" target="_blank">
              <i className="fa-brands fa-linkedin-in text-slate-200 text-[2.6rem] hover:text-teal-300 hover:scale-110 transition-all duration-500" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className="w-[1px] h-[90px] border-[1px] border-slate-300 opacity-60" />
      </div>

      {/* barra email(direita) */}
      <div className="w-[40px] hidden xl:flex h-[340px] fixed bottom-0 right-14 flex-col justify-end items-center gap-[7.4rem]">
        <text className="rotate-90 text-slate-300 w-fit text-[1rem] tracking-[3px]">jpcgprof@gmail.com</text>
        <div className="w-[1px] h-[90px] border-[1px] border-slate-300 opacity-60" />
      </div>

      <div suppressHydrationWarning id="blob" className="w-[500px] fixed aspect-square rounded-full animateOnScroll" />
      <div className="w-full h-full fixed top-0 backdrop-blur-[150px] z-[-1]" />
    </main>
  )
}
