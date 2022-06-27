interface EducationSectionProps {
  name: string;
  startDate: string;
  endDate: string;
  position: string;
  className?: string;
  children?: React.ReactNode;
}

function EducationSection(props: EducationSectionProps) {
  return (
    <div className={`${props.className} py-6`}>
        <h1 className="text-3xl">{props.name}</h1>
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

export default function Education() {
  return (
    <div className="animate-fadein pb-5">
      <h1 className="text-2xl">Educação</h1>
      <div className="flex-col">
      <EducationSection
          name="Universidade Estácio de Sá"
          startDate="Abril/2021"
          endDate="atualmente"
          position="Tecnólogo em Análise e Desenvolvimento de Sistemas"
          className="border-b border-white"
        />     
        <EducationSection
          name="Faculdades Pequeno Príncipe"
          startDate="Abril/2019"
          endDate="Junho/2021"
          position="Especialização em Biologia Molecular"
          className="border-b border-white"
        />     
         <EducationSection
          name="Universidade Regional de Blumenau"
          startDate="Janeiro/2014"
          endDate="Julho/2017"
          position="Bacharelado em Biomedicina"
          className="border-b border-white"
        />  
      </div>
    </div>
  );
}
