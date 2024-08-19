export default function ImageHolder({ children }) {
    return (
        <div className="w-full h-full border-[3px] relative transition-all duration-500 hover:text-teal-300 border-blue-500 hover:border-teal-300 border-opacity-80 rounded-[1rem] bg-blue-500 bg-opacity-15 overflow-hidden">
            <div className="lines w-full h-full z-10 absolute" >
                {children}
            </div>
        </div>
    )
}