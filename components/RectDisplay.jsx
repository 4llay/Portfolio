import ImageHolder from "./ImageHolder";

export default function RectDisplay({imgsrc, title, subtitle}) {
    return (
        <div className="w-[400px] sm:w-[600px] aspect-[16/9]">
            <ImageHolder>
                <img className="w-[150%] h-[125%] object-cover opacity-60 absolute" src={imgsrc}></img>
                <h3 className="z-20 absolute top-[10px] w-full text-center font-HeroFont text-[2rem] sm:text-[3rem] select-none" data-value={title}>{title}</h3>
                <h3 className="z-20 absolute top-[60px] text-slate-300 w-full text-center font-HeroFont text-[1.2rem] sm:text-[1.7rem] select-none" data-value={subtitle}>{subtitle}</h3>
            </ImageHolder>
        </div>
    )
}