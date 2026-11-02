import Link from 'next/link';

import { Contact } from '@/components/apoio/Contact';
import { CHAPTERS, TIERS } from '@/data/apoio';

export default function ApoioHome() {
  return (
    <>
      <section className="ap-wrap pt-12 pb-10 sm:pt-20">
        <h1 className="max-w-[16ch] text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.98]">
          170+ negócios na Madeira já aceitam Bitcoin.
        </h1>
        <p className="mt-6 max-w-[34rem] text-(--ap-mute) text-xl">
          Não vai ser o primeiro, mas pode ser o melhor. Aqui, os bitcoiners podem viver em Bitcoin.
          É um destino Bitcoin reconhecido, o seu negócio é a próxima paragem.
        </p>
        <p className="mt-8">
          <a className="ap-btn" href="#comecar">
            Comece em minutos
          </a>
        </p>
      </section>

      <section className="ap-wrap pt-6" aria-label="O guia, por ordem de utilidade">
        <div className="ap-doors">
          {TIERS.map((tier) => (
            <div key={tier.id} className={`ap-door ap-tier-${tier.id}`}>
              <h2 className="text-2xl">{tier.label}</h2>
              <p className="mt-2 text-[0.95rem] leading-snug opacity-90">{tier.note}</p>
              <ul>
                {CHAPTERS.filter((c) => c.tier === tier.id).map((c) => (
                  <li key={c.slug}>
                    <Link href={`/apoio/${c.slug}`}>
                      {c.num}. {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-semibold [font-family:var(--font-ap-display)]">
          <Link className="underline" href="/apoio/perguntas-frequentes">
            Perguntas frequentes
          </Link>
          <Link className="underline" href="/apoio/folheto">
            Folheto para ver e imprimir
          </Link>
          <Link className="underline" href="/apoio/glossario">
            Glossário
          </Link>
        </p>
      </section>

      <section id="comecar" className="ap-wrap ap-prose pt-20">
        <h2 className="text-4xl">Comece em minutos</h2>
        <p className="mt-3">
          O nosso caminho recomendado é a <strong>Swiss Bitcoin Pay</strong>.
        </p>
        <ol className="ap-steps">
          <li>Descarregue a aplicação.</li>
          <li>
            Adicione os dados do seu negócio: NIF, número da conta bancária, morada e nome do
            negócio.
          </li>
          <li>Demora cerca de 10 minutos.</li>
          <li>Pronto. No fim do dia já pode receber pagamentos em Bitcoin.</li>
        </ol>
        <ul className="my-6 list-disc space-y-2 pl-6">
          <li>Bitcoin entra, euros saem, automaticamente. Só fica com Bitcoin se quiser.</li>
          <li>Sem complexidade contabilística. É tratado como qualquer outra venda, em euros.</li>
          <li>
            Flexível para a equipa: um dispositivo partilhado para todos, ou qualquer funcionário
            gera um pedido de pagamento para a carteira do cliente. Ninguém precisa do telemóvel
            pessoal do dono.
          </li>
          <li>
            Pode ajustar a divisão em qualquer momento, se quiser manter uma parte em Bitcoin.
          </li>
        </ul>
        <dl className="ap-facts">
          {[
            ['Comissão', '1,5%.'],
            ['Fidelização', 'Nenhuma. Pode parar quando quiser.'],
            ['As suas chaves', 'A Swiss Bitcoin Pay não guarda as suas chaves: é não-custodial.'],
            [
              'Dados pedidos',
              'NIF, nome do negócio e morada são, em grande parte, informação que já é pública. O número da conta bancária serve para lhe enviarem os euros.',
            ],
          ].map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p>
          Prefere outra solução? A{' '}
          <Link className="underline" href="/apoio/escolher-a-solucao">
            Blink e a Wallet of Satoshi
          </Link>{' '}
          também funcionam, e explicamos as diferenças. Já usa a aplicação antiga da Wallet of
          Satoshi?{' '}
          <Link className="underline" href="/apoio/wallet-of-satoshi-antiga">
            Veja o que fazer
          </Link>
          .
        </p>
      </section>

      <div className="ap-wrap">
        <Contact />
      </div>
    </>
  );
}
