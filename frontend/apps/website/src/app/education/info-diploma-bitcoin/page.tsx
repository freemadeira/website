import { BookDown, BookOpen } from 'lucide-react';
import { Button, Container, Heading, Link, Text } from '@/components/ui/atoms';
import CollapsibleFAQ from '@/components/ui/atoms/Collapsible';

const calendarTable = [
  {
    chapter: '#1: Porque é que precisamos de dinheiro?',
    theoryClass: '',
    practiceClass: '18 Abr',
  },
  {
    chapter: '#2: O que é o dinheiro?',
    theoryClass: '18 Abr – 24 Abr',
    practiceClass: '25 Abr',
  },
  {
    chapter: '#3: A história do dinheiro',
    theoryClass: '25 Abr – 1 Mai',
    practiceClass: '2 Mai',
  },
  {
    chapter: '#4: O que são moedas fiduciárias e quem as controla?',
    theoryClass: '2 Mai – 8 Mai',
    practiceClass: '9 Mai',
  },
  {
    chapter: '#5: A criação de soluções, com base nos problemas',
    theoryClass: '9 Mai – 15 Mai',
    practiceClass: '16 Mai',
  },
  {
    chapter: '#6: Introdução ao Bitcoin',
    theoryClass: '16 Mai – 22 Mai',
    practiceClass: '23 Mai',
  },
  {
    chapter: '#7: Como usar o Bitcoin',
    theoryClass: '23 Mai – 29 Mai',
    practiceClass: '30 Mai',
  },
  {
    chapter: '#8: Rede Lightning: Usar bitcoin no dia a dia',
    theoryClass: '30 Mai – 5 Jun',
    practiceClass: '6 Jun',
  },
  {
    chapter: '#9: Uma Introdução ao lado técnico do Bitcoin',
    theoryClass: '6 Jun – 12 Jun',
    practiceClass: '13 Jun',
  },
  {
    chapter: '#10: Porquê o Bitcoin?',
    theoryClass: '13 Jun – 19 Jun',
    practiceClass: '20 Jun',
  },
];

const table = (
  <table className="my-8 w-full">
    <thead className="text-left">
      <tr className="h-8">
        <th>Capítulo</th>
        <th>Aula teórica</th>
        <th>Aula prática</th>
      </tr>
    </thead>

    <tbody>
      {calendarTable.map((item) => (
        <tr key={item.chapter} className="h-10 border-mountain-mist-200 border-b">
          <td>{item.chapter}</td>
          <td className="text-nowrap">{item.theoryClass}</td>
          <td className="text-nowrap">{item.practiceClass}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const faq = [
  {
    question: 'O que é o Diploma Bitcoin?',
    answer:
      'O Diploma Bitcoin é uma adaptação do programa de 10 semanas internacionalmente reconhecido desenvolvido pela My First Bitcoin. Este curso dar-te-á noções sólidas sobre o Bitcoin.',
  },
  {
    question: 'A quem se destina este curso?',
    answer:
      'A todos os que têm interesse em aprender mas também aprofundar os seus conhecimentos sobre Bitcoin. Este curso é uma excelente oportunidade para quem deseja compreender os fundamentos do Bitcoin e o seu impacto na sociedade, de forma estruturada e acessível.',
  },
  {
    question: 'Qual a língua do curso?',
    answer: 'O curso será lecionado inteiramente em português.',
  },
  {
    question: 'Qual a duração do curso?',
    answer: 'No total, o curso conta com dez capítulos, distribuídos por dez semanas.',
  },
  {
    question: 'Qual o formato das aulas?',
    answer:
      'Cada semana inclui uma aula teórica gravada, a que os alunos devem assistir antes da aula prática, e uma aula prática em direto (online) para exercícios práticos, esclarecimento de dúvidas e discussão dos temas do capítulo. A aula prática acontece aos sábados de manhã.',
  },
  {
    question: 'Qual o calendário das aulas?',
    answer: table,
  },
  {
    question: 'Quando e a que horas serão dadas as aulas práticas?',
    answer:
      'As aulas práticas acontecerão aos sábados, às 10 da manhã (hora de Portugal Continental e Madeira).',
  },
  {
    question: 'Como posso aceder às aulas práticas?',
    answer:
      'A ligação para as aulas práticas será enviada antes do início do curso para o endereço de e-mail indicado na inscrição.',
  },
  {
    question: 'Durante quanto tempo ficam disponíveis as aulas gravadas?',
    answer: 'As aulas gravadas ficarão disponíveis mesmo depois de terminado o curso.',
  },
  {
    question: 'O que é o My First Bitcoin?',
    answer:
      'O My First Bitcoin é um movimento global e descentralizado, com foco na educação de Bitcoin independente, imparcial e liderada pela comunidade. O Diploma Bitcoin teve início em El Salvador, tendo já sido traduzido para oito idiomas e lecionado em diversos países por todo o mundo.',
  },
  {
    question: 'A presença nas aulas práticas é obrigatória?',
    answer: 'Sim, a presença nas aulas práticas é obrigatória para a obtenção do diploma.',
  },
  {
    question: 'Não vou poder participar numa das aulas práticas. O que devo fazer?',
    answer:
      'Caso não possas participar numa das aulas práticas, por favor, informa-nos por e-mail para education@freemadeira.org. Teremos isso em conta no momento da avaliação.',
  },
  {
    question: 'Como será feita a avaliação do curso?',
    answer: 'A avaliação terá em conta a assiduidade e a participação ativa nas aulas práticas.',
  },
  {
    question: 'No final do curso terei direito a um diploma ou comprovativo de participação?',
    answer: 'Sim, desde que cumpras os objetivos de avaliação.',
  },
  {
    question: 'Porque é obrigatório ter a câmara ligada durante as aulas práticas?',
    answer:
      'Queremos que a experiência de participar neste curso seja envolvente e de partilha de conhecimentos, com espaço para participação e esclarecimento de dúvidas de todos os participantes. Isto só é possível criando uma ligação entre todas as pessoas envolvidas. O contacto visual é essencial para isso.',
  },
  {
    question: 'As aulas práticas serão gravadas?',
    answer:
      'Não. As aulas práticas acontecerão apenas em direto. Não será feita qualquer gravação das mesmas por uma questão de conforto e privacidade dos participantes. As aulas teóricas estarão sempre disponíveis no nosso site.',
  },
  {
    question: 'Porque é que este curso não é gratuito?',
    answer:
      'O valor simbólico de inscrição serve para garantir o compromisso dos participantes. Esse valor será posteriormente devolvido sob a forma de desconto na nossa loja online.',
  },
  {
    question: 'As vagas são limitadas?',
    answer:
      'Sim, existe um número máximo de participantes, de forma a podermos garantir a qualidade das aulas práticas. Aconselhamos-te a inscreveres-te logo que possas.',
  },
  {
    question: 'Qual o prazo para me inscrever?',
    answer:
      'As inscrições estarão abertas até dia 16 de Abril ou até ser atingido o número máximo de participantes',
  },
  {
    question: 'Porque não me posso inscrever a meio do curso?',
    answer:
      'Este curso está organizado em 10 capítulos, com uma ordem fixa. Ao não participares nas primeiras aulas, estás a perder informação pertinente que te permite acompanhar o curso. No entanto, podes sempre assistir às aulas gravadas.',
  },
  {
    question: 'Não posso participar neste curso. Haverá outro no futuro?',
    answer:
      'Sim, planeamos lecionar regularmente este curso. Subscreve a nossa newsletter ou segue-nos nas redes sociais para estares sempre a par das novidades sobre os cursos e workshops que lecionamos.',
  },
  {
    question: 'Existe algum material de suporte ao curso?',
    answer:
      'Sim, o manual Diploma Bitcoin é o material de apoio principal. Podes fazer o download gratuito do mesmo. Se preferires adquiri-lo em formato físico podes comprá-lo na nossa loja online. Para além do manual, também as apresentações das aulas teóricas e práticas serão partilhadas. As ligações para download e para compra do manual estão disponíveis acima, na secção "Manual do aluno".',
  },
];

export default function Page() {
  return (
    <>
      <Container size="tighter" className="my-10 max-w-4xl" gap={4}>
        <Heading size="h3">Diploma Bitcoin</Heading>

        <Text>
          O Diploma Bitcoin é a adaptação portuguesa do curso internacionalmente reconhecido, criado
          pela My First Bitcoin e já traduzido para mais de 8 idiomas.
        </Text>

        <Text>
          Este programa de 10 capítulos foi projetado para capacitar indivíduos, empresas e
          comunidades, promovendo a literacia financeira e uma compreensão sólida do Bitcoin.
        </Text>

        <Text>
          É uma excelente oportunidade para quem deseja compreender os fundamentos do Bitcoin e o
          seu impacto na sociedade, de forma estruturada e acessível.
        </Text>

        <Text>
          A participação no curso tem um valor simbólico de 21 €, que serve para garantir o
          compromisso dos participantes. Esse valor será posteriormente devolvido sob a forma de
          desconto na nossa loja online.
        </Text>

        <Text>As aulas acontecem semanalmente, exclusivamente online. Cada capítulo inclui:</Text>

        <ul className="list-disc pl-5">
          <li>
            Uma aula teórica gravada (de até 45 minutos), a que os alunos devem assistir antes da
            aula prática. Esta gravação é disponibilizada com uma semana de antecedência da aula
            prática e fica disponível para consulta a qualquer momento.
          </li>
          <li>
            Uma aula prática em direto (online) para exercícios práticos, esclarecimento de dúvidas
            e discussão dos temas do capítulo. Esta sessão acontece todos os sábados de manhã ao
            longo da duração do curso.
          </li>
        </ul>

        <Heading size="h6">Resumo do calendário</Heading>

        <ul className="list-disc pl-5">
          <li>
            <b>Duração:</b> 10 semanas
          </li>
          <li>
            <b>Total de Aulas:</b> 20 (10 gravadas, 10 em direto)
          </li>
          <li>
            <b>Quando:</b> Todos os sábados às 10h
          </li>
        </ul>

        <Heading size="h6">Temas discutidos durante o curso</Heading>

        <ul className="list-disc pl-5">
          <li>O que é o dinheiro, a sua história e como funciona</li>
          <li>O que são moedas fiduciárias</li>
          <li>Problemas do sistema financeiro atual</li>
          <li>O que é o Bitcoin e como o utilizar</li>
          <li>Rede Lightning e pagamentos do dia a dia</li>
          <li>O lado técnico do Bitcoin</li>
        </ul>

        <Heading size="h6">Material Necessário</Heading>

        <ul className="list-disc pl-5">
          <li>
            Equipamento com acesso à internet, microfone e câmara em correto funcionamento, para
            assistir e participar nas aulas.
          </li>
          <li>Smartphone com acesso à internet, para as partes práticas.</li>
        </ul>

        <Heading size="h6">Manual do aluno</Heading>

        <Text>
          Podes descarregar gratuitamente o manual em versão digital. Se quiseres, podes também
          comprar a versão impressa.
        </Text>

        <ul>
          <li>
            <Link
              href="https://github.com/freemadeira/diploma-bitcoin/releases/download/v2025.1.0/Diploma_Bitcoin_pt-PT_2025.1.0.pdf"
              className="flex items-center gap-1.5 hover:underline"
            >
              <BookDown strokeWidth={1} size={18} /> Versão digital
            </Link>
          </li>
          <li>
            <Link
              href="https://shop.freemadeira.org/products/o-meu-primeiro-bitcoin-diploma-bitcoin"
              className="flex items-center gap-1.5 hover:underline"
            >
              <BookOpen strokeWidth={1} size={18} /> Versão impressa
            </Link>
          </li>
        </ul>

        <Button as={Link} href="https://forms.gle/LC2VQRdxY4v5y7DPA" className="mt-6">
          Inscreve-te já!
        </Button>
      </Container>

      <Container size="tighter" className="my-10 max-w-4xl">
        <Heading size="h5" className="my-4 mt-8">
          Perguntas Frequentes
        </Heading>

        {faq.map((item) => (
          <CollapsibleFAQ key={item.question} title={item.question}>
            {item.answer}
          </CollapsibleFAQ>
        ))}
      </Container>
    </>
  );
}
