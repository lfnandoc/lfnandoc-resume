import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface SkillProps {
    icon: IconProp;
    label: string;
    percent: number;
}


function Skill(props: SkillProps) {
    return (
        <div className="flex flex-row gap-x-2">
            <FontAwesomeIcon icon={props.icon} className="my-auto" />
            <p>{props.label}</p>
            <div className="ml-auto bg-slate-800 my-auto w-16 h-2 rounded-lg">
                <div className="bg-white w-16 h-2 rounded-lg animate-grow" style={{ width: `${props.percent}%` }} />
            </div>
        </div>
    );
}

export default function Skills() {

    return (
        <div className="animate-fadein">
            <h1 className="text-2xl">Habilidades</h1>
            <p className="mt-5">O quanto me sinto à vontade em relação a:</p>

            <div className="flex flex-wrap gap-x-16 gap-y-16 w-full">

                <div className="mt-5">
                    <h2 className="text-lg ">Front-End:</h2>
                    <Skill icon={solid("code")} label="HTML" percent={80} />
                    <Skill icon={brands("css3")} label="CSS" percent={60} />
                    <Skill icon={solid("paintbrush")} label="Tailwind CSS" percent={80} />
                    <Skill icon={brands("js-square")} label="JavaScript" percent={80} />
                    <Skill icon={brands("js-square")} label="TypeScript" percent={70} />
                    <Skill icon={brands("react")} label="React" percent={70} />
                </div>

                <div className="mt-5">
                    <h2 className="text-lg ">Back-End:</h2>
                    <Skill icon={solid("code")} label="C#" percent={95} />
                    <Skill icon={brands("microsoft")} label=".NET Core" percent={95} />
                    <Skill icon={brands("microsoft")} label=".NET Framework" percent={85} />
                    <Skill icon={brands("node")} label="Node.js" percent={50} />
                    <Skill icon={solid("database")} label="MySQL" percent={90} />
                    <Skill icon={solid("database")} label="SQL Server" percent={80} />
                    <Skill icon={brands("java")} label="Java" percent={30} />
                </div>

                <div className="mt-5">
                    <h2 className="text-lg ">Outros:</h2>
                    <Skill icon={brands("git-alt")} label="Git" percent={90} />
                    <Skill icon={solid("flask")} label="Testes Unitários" percent={80} />
                    <Skill icon={brands("microsoft")} label="Azure Cloud" percent={70} />
                    <Skill icon={brands("aws")} label="AWS" percent={50} />
                    <Skill icon={solid("code")} label="Código limpo" percent={100} />
                    <h2 className="text-lg mt-3 ">Pessoais:</h2>
                    <Skill icon={solid("comment")} label="Inglês" percent={100} />
                    <Skill icon={solid("envelopes-bulk")} label="Adaptabilidade" percent={100} />
                    <Skill icon={solid("book")} label="Vontade de aprender" percent={100} />
                </div>


            </div>
        </div>
    )
}