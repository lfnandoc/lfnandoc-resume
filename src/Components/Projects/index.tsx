import TokCommentSite from "../../Images/tokcomment.png";
import Nanacita from "../../Images/nanacita.png";

interface ProjectProps {
  name: string;
  date: string;
  url?: string;
  className?: string;
  children?: React.ReactNode;
}

function Project(props: ProjectProps) {
  return (
    <div className={`${props.className} py-6 flex flex-col`}>
      <a href={props.url ?? "#"} target="_blank" rel="noreferrer">
        <h1 className="text-3xl">{props.name}</h1>
      </a>
      <div className="ml-5 mt-2">
        <p className="text-xs">{props.date}</p>
        <div className="mt-2">{props.children}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="animate-fadein pb-5 grow overflow-y-auto">
      <h1 className="text-2xl mb-2">Projetos</h1>
      <p>Além destes projetos, confira meu perfil no <a href="https://github.com/lfnandoc"className="font-bold" target="_blank" rel="noreferrer">GitHub!</a></p>
      <div className="flex-col">
        <Project
          name="TOKComment"
          url="https://tokcomment.com"
          date="Junho/2022"
        >
          <li>Freelance desenvolvido para uma companhia de marketing americana</li>
          <li>É um gerador de comentários para vídeos de TikTok, gerando uma imagem que pode ser baixada</li>
          <li>Desenvolvido em HTML, Javascript e TailwindCSS</li>

          <div className="overflow-y-auto w-[50%] h-64 my-2 mx-auto">
            <img src={TokCommentSite} alt="TOKComment" />
          </div>
        </Project>

        <Project
          name="Nanacita Generator"
          url="http://nanacita.lfnandoc.net/"
          date="Junho/2022"
        >
          <li>Gerador de meme baseado em uma imagem da cantora Naiara Azevedo</li>  
          <li>Faz uso da API do Spotify para obter a arte do álbum a ser aplicada no disco</li>
          <li>Desenvolvido em ReactJS e Tailwind CSS</li>
          <div className="overflow-y-auto w-[50%] h-64 my-2 mx-auto">
            <img src={Nanacita} alt="Nanacita Generator" />
          </div>
        </Project>        
      </div>
    </div>
  );
}
