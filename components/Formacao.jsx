import RectDisplay from "./RectDisplay";
import Titulo from "./titulo";

export default function Formacao() {
    return (
        <div className="flex textShadow text-slate-200 flex-col gap-8 justify-center">
            <Titulo number={"02."} title={"Formações"}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-[50px]">
                    <RectDisplay imgsrc={"dino.png"} title={"Curso tecnico de informatica"} subtitle={"Data de término 2023"}/>
                    <RectDisplay imgsrc={"cs.jpeg"} title={"Cursando Ciência da Computação"} subtitle={"Data de término 2028 (Não finalizado)"}/>
            </div>
        </div>
    )
}