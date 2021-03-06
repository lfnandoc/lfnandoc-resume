import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useNavigate } from 'react-router-dom';
import LocalizedStrings from 'react-localization';

interface FooterButtonProps {
    icon: IconProp;
    label: string;
    onClick?: () => void;
}

function FooterButton(props: FooterButtonProps) {
    return (
        <div className="relative">
            <div onClick={props.onClick} className="peer cursor-pointer group relative m-auto flex flex-col items-center rounded-full bg-white h-6 w-6 text-slate-700 transition-all ease-linear hover:scale-110">
                <FontAwesomeIcon icon={props.icon} className="m-auto" />
            </div>
        </div>
    );
}

export default function Footer() {
    const openExternalLink = (url: string) => {
        window.open(url, '_blank');
    }

    const mailTo = (email: string) => {
        window.location.href = `mailto:${email}`;
    }   



    return (
        <div className="flex flex-row gap-x-2 pb-2 mb-2 border-t-0 border-b md:mt-auto md:mb-4 md:border-t md:border-b-0 border-white md:pt-3">
            <FooterButton icon={brands("github")} label="GitHub" onClick={() => openExternalLink("http://github.com/lfnandoc")} />
            <FooterButton icon={brands("linkedin")} label="LinkedIn" onClick={() => openExternalLink("https://linkedin.com/in/lfnandoc/")} /> 
            <FooterButton icon={solid("envelope")} label="E-Mail" onClick={() => mailTo("contato@lfnandoc.net")} />
            <p className="text-xs md:text-base my-auto">contato@lfnandoc.net</p>
        </div>
    )
}