import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useNavigate, useLocation} from 'react-router-dom';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
 pt:{
   home: "Início",
   skills: "Habilidades",
    experience: "Experiência",
    education: "Educação",
    about: "Sobre",
    contact: "Contato",

 },
 en: {
    home: "Home",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    about: "About",
    contact: "Contact",
}});

interface SidebarButtonProps {
    icon: IconProp;
    label: string;
    onClick?: () => void;
    ping?: boolean;
}

function SidebarButton(props: SidebarButtonProps) {
    return (
        <div className="relative">
            <div onClick={props.onClick} className="peer cursor-pointer group relative m-auto flex flex-col items-center rounded-full bg-white h-8 w-8 text-slate-700 transition-all ease-linear betterhover:hover:scale-110">
                <FontAwesomeIcon icon={props.icon} className="m-auto" />
                {props.ping && <div onClick={props.onClick} className="top-0 absolute rounded-full bg-white h-8 w-8 -z-20 animate-ping"/>}
            </div>          
            <p className="absolute left-[50%] top-1.5 text-white text-sm m-auto transition-all ease-linear opacity-0 betterhover:peer-hover:opacity-100  betterhover:peer-hover:translate-x-[1.25rem] -z-50">{props.label}</p>
        </div>
    );    
}
export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="sticky w-28 md:w-48 h-full">
            <div className="scale-75 origin-top md:scale-100">
            <div className="absolute bg-white w-[6px] h-96 top-0 -z-50 left-[50%] -ml-[3px]" />
            <div className="flex flex-col">
                <div className="mt-10 bg-white rounded-full w-24 h-24 m-auto flex">
                    <img src="https://github.com/lfnandoc.png" alt="avatar" className="rounded-full w-20 h-20 m-auto" />
                </div>
                <div className="grow flex flex-col mt-6 gap-y-4">
                    <SidebarButton icon={solid("house")} label={strings.home} onClick={() => navigate("/")} />
                    <SidebarButton icon={solid("lightbulb")} ping={isHome} label={strings.skills} onClick={() => navigate("/skills")} />
                    <SidebarButton icon={solid("suitcase")} label={strings.experience} onClick={() => navigate("/experience")} />
                    <SidebarButton icon={solid("graduation-cap")} label={strings.education} onClick={() => navigate("/education")} />
                    <SidebarButton icon={solid("code")} label={strings.about} onClick={() => navigate("/about")} />
                </div>
            </div>
            </div>

        </div>
    );
}