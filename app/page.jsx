import AboutMe from "@/components/AboutMe"
import HeroSection from "@/components/HeroSection"
import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <main className='w-[100dvw] h-[100dvh] bg-slate-900 bg-blocksBg overflow-x-hidden'>
      <NavBar />
      
      <a id="hero" />
      <div className="flex items-center justify-around w-screen h-screen">
        <HeroSection />
        <img src="/eu.png" className="a translate-y-[5%]"></img>
      </div>

      <br id="about me" /><br />
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
        <AboutMe />
      </div>

    </main>
  )
}
