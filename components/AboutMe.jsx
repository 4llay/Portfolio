export default function AboutMe() {
    return (
        <div className="flex flex-col">
            <div className="text-slate-200 flex items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-1 text-[2rem]">
                        <span className="text-teal-300 font-normal font-sans text-[1.5rem]">01.</span><h1 data-value="Sobre Mim">Sobre Mim</h1>
                    </div>

                    <p className="w-[620px] text-[1.2rem] text-balance">We're no strangers to love, You know the rules and so do I, A full commitment's what I'm thinking of, You wouldn't get this from any other guy, I just wanna tell you how I'm feeling, Gotta make you understand, Never gonna give you up, Never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, Never gonna say goodbye, Never gonna tell a lie and hurt you</p>

                    <p className="w-[620px] text-[1.2rem] text-balance">Jugemu Jugemu Gokō-no Surikire Kaijarisuigyo-no Suigyōmatsu Unraimatsu Fūraimatsu Kuunerutokoro-ni Sumutokoro Yaburakōji-no Burakōji Paipopaipo Paipo-no Shūringan Shūringan-no Gūrindai Gūrindai-no Ponpokopii-no Ponpokonā-no Chōkyūmei-no Chōsuke</p>

                    <p className="w-[620px] text-[1.2rem] text-balance">EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI EU PERDI</p>

                    <p className="w-[620px] text-[1.2rem] text-balance">Eu fiz esse negocio ai em baixo: </p>
                </div>
                <div className="border-4 border-double relative">
                    <div className="bg-teal-300 w-[550px] h-[550px] absolute z-10 opacity-50 hover:scale-[115%] hover:opacity-0 transition-all duration-1000"></div>
                    <div className="w-[550px] h-[550px] border-4 border-double border-teal-300 absolute -z-10 hover:opacity-0 transition-all duration-1000"></div>
                    <img src="/eu gigabrain.png" className="select-none object-cover w-[550px] h-[550px]"></img>
                </div>
            </div>
            <div className="grid grid-cols-2 w-[620px]">
                <p><i class="fa-solid fa-caret-right text-teal-300"></i> JavaScript</p>
                <p><i class="fa-solid fa-caret-right text-teal-300"></i> TypeScript</p>
                <p><i class="fa-solid fa-caret-right text-teal-300"></i> Unreal Engine Blueprints</p>
                <p><i class="fa-solid fa-caret-right text-teal-300"></i> Next.js</p>
            </div>
        </div>
    )
}