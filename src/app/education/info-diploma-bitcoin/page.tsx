import { BookDown, BookOpen } from 'lucide-react';
import { Button, Container, Heading, Link, Text } from '@/components/ui/atoms';
import CollapsibleFAQ from '@/components/ui/atoms/Collapsible';

const calendarTable = [
  {
    chapter: '#1: Porque é que precisamos de dinheiro?',
    theoryClass: '',
    practiceClass: '27 Set',
  },
  {
    chapter: '#2: O que é o dinheiro?',
    theoryClass: '27 Set – 3 Out',
    practiceClass: '4 Out',
  },
  {
    chapter: '#3: A história do dinheiro',
    theoryClass: '4 Out – 10 Out',
    practiceClass: '11 Out',
  },
  {
    chapter: '#4: O que são moedas fiduciárias e quem as controla?',
    theoryClass: '11 Out – 17 Out',
    practiceClass: '18 Out',
  },
  {
    chapter: '#5: A criação de soluções, com base nos problemas',
    theoryClass: '18 Out – 24 Out',
    practiceClass: '25 Out',
  },
  {
    chapter: '#6: Introdução ao Bitcoin',
    theoryClass: '25 Out – 31 Out',
    practiceClass: '1 Nov',
  },
  {
    chapter: '#7: Como usar o Bitcoin',
    theoryClass: '1 Nov – 7 Nov',
    practiceClass: '8 Nov',
  },
  {
    chapter: '#8: Rede Lightning: Usar bitcoin no dia a dia',
    theoryClass: '8 Nov – 14 Nov',
    practiceClass: '15 Nov',
  },
  {
    chapter: '#9: Uma Introdução ao lado técnico do Bitcoin',
    theoryClass: '15 Nov – 21 Nov',
    practiceClass: '22 Nov',
  },
  {
    chapter: '#10: Porquê o Bitcoin?',
    theoryClass: '22 Nov – 28 Nov',
    practiceClass: '29 Nov',
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
      'O Diploma Bitcoin é uma adaptação do programa de 10 semanas internacionalmente reconhecido desenvolvido pela My First Bitcoin. É totalmente gratuito e dar-te-á noções sólidas sobre o Bitcoin.',
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
    answer: 'As aulas práticas acontecerão aos sábados, às 10 da manhã.',
  },
  {
    question: 'Como posso aceder às aulas práticas?',
    answer:
      'A ligação para as aulas práticas será enviada antes do início do curso para o e-mail indicado na inscrição.',
  },
  {
    question: 'Durante quanto tempo as aulas gravadas ficam disponíveis?',
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
      'Caso não possas participar numa das aulas práticas, por favor, informa-nos por e-mail para info@freemadeira.org. Teremos isso em conta no momento da avaliação.',
  },
  {
    question: 'Como será feita a avaliação do curso?',
    answer: 'A avaliação terá em conta a assiduidade e a participação ativa nas aulas práticas.',
  },
  {
    question: 'No final do curso terei direito a algum diploma ou comprovativo de participação?',
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
    question: 'Porque é este curso gratuito?',
    answer:
      'A FREE Madeira é uma associação sem fins lucrativos, que tem o privilégio de receber bolsas para poder desenvolver o seu trabalho de forma profissional e financeiramente sustentável.',
  },
  {
    question: 'As vagas são limitadas?',
    answer:
      'Sim, existe um número máximo de participantes, de forma a podermos garantir a qualidade das aulas práticas. Aconselhamos-te a inscreveres-te logo que possas.',
  },
  {
    question: 'Qual o prazo para me inscrever?',
    answer: 'As inscrições estarão abertas até dia 25 de Setembro.',
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
          Este programa gratuito de 10 capítulos foi projetado para capacitar indivíduos, empresas e
          comunidades, promovendo a literacia financeira e uma compreensão sólida do Bitcoin.
        </Text>

        <Text>
          É uma excelente oportunidade para quem deseja compreender os fundamentos do Bitcoin e o
          seu impacto na sociedade, de forma estruturada e acessível.
        </Text>

        <Text>As aulas acontecem semanalmente, exclusivamente online. Cada capítulo inclui:</Text>

        <ul className="list-disc pl-5">
          <li>
            Uma aula teórica gravada (entre 60–90 minutos), a que os alunos devem assistir antes da
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

        <Button
          as={Link}
          href="https://docs.google.com/forms/d/1l_JwWx-aIJ-KNHhpsw0lmy4U4it6GuUFMf7IIf4bdLo"
          className="mt-6"
        >
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
