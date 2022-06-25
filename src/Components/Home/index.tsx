import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="animate-fadein">
            <h1 className="text-2xl">Olá!</h1>
            <div className="flex flex-col gap-y-4 pb-5 w-full">
                <p className="mt-3">Este é o meu pequeno site pessoal.</p>
                <p>Aqui você pode ver minhas habilidades, experiência e educação.</p>
                <p>Navegue pelos ícones à esquerda!</p>
            </div>
        </div>
    );
}
