import TokCommentSite from "../../Images/tokcomment.png";

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
    <div className="animate-fadein pb-5">
      <h1 className="text-2xl">Projetos</h1>
      <div className="flex-col">
        <Project
          name="TOKComment"
          url="https://tokcomment.com"
          date="Junho/2022"
        >
          <li>Freelance desenvolvido para uma companhia de marketing americana</li>
          <li>É um gerador de comentários para vídeos de TikTok, gerando uma imagem que pode ser baixada</li>
          <li>Deenvolvido em HTML, Javascript e TailwindCSS</li>
          <div className="overflow-y-auto w-[50%] h-64 my-2 mx-auto">
            <img src={TokCommentSite} alt="TOKComment" />
          </div>
        </Project>
      </div>
    </div>
  );
}
