import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CompanyProps {
  name: string;
  url: string;
  startDate: string;
  endDate: string;
  position: string;
  className?: string;
  children?: React.ReactNode;
}

function Company(props: CompanyProps) {
  return (
    <div className={`${props.className} py-6`}>
      <a href={props.url} target="_blank" rel="noreferrer">
        <h1 className="text-3xl">{props.name}</h1>
      </a>
      <div className="ml-5 mt-2">
        <h2 className="text-lg">{props.position}</h2>
        <p className="text-xs">
          {props.startDate} - {props.endDate}
        </p>
        <div className="mt-2">{props.children}</div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="animate-fadein pb-5">
      <h1 className="text-2xl">Experiência Profissional</h1>
      <div className="flex-col">
      <Company
          name="Playmove"
          url="https://playtable.com.br/"
          startDate="Maio/2022"
          endDate="atualmente"
          position="Desenvolvedor Fullstack"
          className="border-b border-white"
        >
            <li>Manutenção do sistema interno da empresa utilizando C# .NET MVC</li>
            <li>Desenvolvimento de produtos novos</li>
            <li>Incluindo uma plataforma de ensino a distância com back-end em .NET Core e front-end em ReactJS</li>
        </Company>
        <Company
          name="Qualyteam"
          url="https://qualyteam.com/"
          startDate="Julho/2021"
          endDate="Abril/2022"
          position="Desenvolvedor Fullstack"
          className="border-b border-white"
        >
          <li>Atuava no desenvolvimento de módulos de um sistema de gestão da qualidade, utilizando C# .NET (WebForms), HTML, CSS, Javascript e MySQL.</li>
          <li>Correção de bugs e desenvolvimento de melhorias</li>
          <li>Auxílio à equipe de Suporte e Customer Success</li>
          <li>Code review, reuniões diárias e auxílio no treinamento de novos desenvolvedores</li>
          <li>Desenvolvimento de integrações via Zapier</li>
        </Company>
        <Company
          name="Laboratório LANAC"
          url="https://www.lanac.com.br/"
          startDate="Abril/2019"
          endDate="Junho/2021"
          position="Biomédico Analista Clínico"
          className="border-b border-white"
        />
        <Company
          name="Laboratório Verner Willrich"
          url="https://labvw.com.br/"
          startDate="Junho/2017"
          endDate="Abril/2019"
          position="Biomédico Analista Clínico"
        />
      </div>
    </div>
  );
}
