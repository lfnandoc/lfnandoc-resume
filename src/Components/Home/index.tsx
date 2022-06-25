import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="animate-fadein grow">
            <div className="w-[70%]">
            <h1 className="text-2xl">Olá! Pode me chamar de Nando.</h1>
            <div className="flex flex-col gap-y-4 pb-5 w-full">           
                <p className="mt-3">Meu nome é <b>Luiz Fernando Cardoso</b>, e sou desenvolvedor de software.</p>     
                <p >Este é o meu pequeno site pessoal.</p>
                <p>Aqui você pode consultar minhas habilidades, experiência e educação.</p>
                <p>Comece navegando pelos ícones à esquerda!</p>
            </div>
            </div>
        </div>
    );
}
