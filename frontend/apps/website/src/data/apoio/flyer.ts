// The merchant flyer's copy (front: why say yes, back: how to start), in Portuguese.
// Source: the merchant-guide flyer (madfree/merchant-support/merchant-guide). Two lines differ
// from the printed text on purpose, to match the settled apoio decisions: the fee is 1.5% and
// the home-page claim is 170+.
export const FLYER = {
  front: {
    headline: '170+ negócios na Madeira já aceitam Bitcoin.',
    sub: 'Aqui, os bitcoiners podem viver em Bitcoin. É um destino Bitcoin reconhecido, o seu negócio é a próxima paragem.',
    reasons: [
      {
        title: 'Não vai ser o primeiro, mas pode ser o melhor.',
        body: 'Mais de 170 negócios na Madeira já o fazem. É comprovado, é real.',
      },
      {
        title: 'Publicidade gratuita, efeito de rede real.',
        body: 'Uma entrada gratuita no BTC Map, onde uma comunidade ativa e vibrante encontra todos os sítios onde pode pagar em Bitcoin.',
      },
      {
        title: 'Melhores clientes, e mais clientes.',
        body: 'Os bitcoiners querem valor real, não pechinchas. Valorizam a qualidade e um bom atendimento, seja qual for o seu negócio.',
      },
      {
        title: 'Apoiamos os nossos.',
        body: 'Nem todos pagam em Bitcoin em todas as visitas, mas a comunidade continua a visitar e a recomendar os locais que aceitam Bitcoin.',
      },
    ],
  },
  back: {
    headline: 'Comece em minutos!',
    sub: 'O nosso caminho recomendado — Swiss Bitcoin Pay',
    steps: [
      'Descarregue a aplicação.',
      'Adicione os dados do seu negócio: NIF, número da conta bancária, morada e nome do negócio.',
      'Demora cerca de 10 minutos.',
      'Pronto. Processado como um pagamento normal por cartão.',
    ],
    easyHeading: 'Aceitar Bitcoin nunca foi tão fácil!',
    easy: [
      'Bitcoin entra, euros saem, automaticamente. Só fica com Bitcoin se quiser.',
      'Sem complexidade contabilística. É tratado como qualquer outra venda.',
      'Flexível para a sua equipa: use um dispositivo partilhado para todos, ou deixe qualquer funcionário gerar um pedido de pagamento.',
      'Pode ajustar a divisão em qualquer momento, se preferir manter uma parte em Bitcoin.',
    ],
    holdHeading: 'Se preferir guardar o Bitcoin',
    hold: [
      'Guardar Bitcoin é um passo importante, e é onde queremos que todos os comerciantes acabem por chegar. Hoje é mais complexo, por isso começamos pelo caminho fácil primeiro.',
      'Fale com o seu contabilista sobre guardar ativos em espécie. Um contabilista na Madeira pode cobrar mais por isto.',
      'Quando estiver pronto para dar esse passo, temos todo o gosto em guiá-lo pelo caminho até à autocustódia.',
    ],
    tiersHeading: 'Lightning vs. on-chain',
    tiersBody:
      'A Lightning é rápida e barata, ideal para pagamentos do dia a dia. Para valores maiores, escolha com este guia:',
    tiers: [
      ['Até 500 €', 'Mantenha-se na Lightning.'],
      ['500 € a 1.000 €', 'Passe para uma carteira on-chain.'],
      ['Mais de 1.000 €', 'Recomendamos uma hardware wallet.'],
    ],
    optionsHeading: 'Outras opções reais',
    options: [
      [
        'Wallet of Satoshi',
        'Autocustódia. A sua própria aplicação de ponto de venda dedicada significa que a equipa nunca tem acesso aos seus fundos.',
      ],
      [
        'Blink',
        'Modelo semelhante de ponto de venda dedicado, bom para várias pessoas ou dispositivos.',
      ],
    ],
    troubleHeading: 'Se um pagamento não chegar',
    trouble:
      'Peça ao cliente para verificar a carteira e tentar novamente. Se ele lhe mostrar um pagamento confirmado, peça uma cópia da fatura e envie-a para nós. Entraremos em contacto diretamente com o fornecedor.',
    faqHeading: 'Perguntas frequentes',
    faq: [
      [
        'Quando é que recebo o pagamento?',
        'O valor em euros fica fixado no momento da venda. O pagamento na conta bancária chega tipicamente no dia útil seguinte.',
      ],
      ['Quanto custa?', 'A Swiss Bitcoin Pay cobra 1,5%. Sem mensalidade nem aluguer de terminal.'],
      ['Posso parar quando quiser?', 'Sim. Sem período de fidelização, sem compromissos.'],
    ],
    blurb:
      'Somos a FREE Madeira, uma organização não-lucrativa, fundada em 2022, a equipa por detrás da Bitcoin Atlantis. Ajudamos a configurar tudo, de graça, e temos todo o gosto em ajudar se algo correr mal.',
  },
} as const;
