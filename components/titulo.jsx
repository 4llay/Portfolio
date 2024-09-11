export default function Titulo({number, title}) {
    return (
        <div className="flex items-center gap-1 text-[2rem]">
            <span className="text-teal-300 font-normal font-sans text-[1.5rem]">{number}</span><h1 className="text-nowrap">{title}</h1>
            <div className="w-full h-0 border-[1px] border-slate-300 opacity-60"></div>
        </div>
    )
}