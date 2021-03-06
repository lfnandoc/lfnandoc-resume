import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function UnderConstruction() {

    return (
        <div className="animate-fadein grow">
            <div className="w-[70%] flex flex-col">
                <h1 className="text-2xl">Página em construção</h1>
                <div className="flex flex-col gap-y-4 pb-5 w-fit">
                    <FontAwesomeIcon icon={solid("person-digging")} className="mx-auto mt-4" size="4x" />
                    <p className="mt-3">Esta página está em construção, mas você poderá acessá-la novamente em breve.</p>
                    <p>Navegue pelo site usando os ícones à esquerda.</p>
                </div>
            </div>
        </div>
    );
}