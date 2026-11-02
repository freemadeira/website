import Link from 'next/link';

import { Contact } from '@/components/apoio/Contact';
import { CHAPTERS, TIERS } from '@/data/apoio';

export default function ApoioHome() {
  return (
    <>
      <section>
        <h1 className="font-medium text-4xl leading-tight sm:text-5xl">
          170+ negócios na Madeira já aceitam Bitcoin.
        </h1>
        <p className="mt-4 text-lg text-mountain-mist-500">
          Não vai ser o primeiro, mas pode ser o melhor. Aqui, os bitcoiners podem viver em Bitcoin.
          É um destino Bitcoin reconhecido, o seu negócio é a próxima paragem.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-semibold text-3xl">Comece em minutos</h2>
        <p className="my-3">
          O nosso caminho recomendado é a <strong>Swiss Bitcoin Pay</strong>.
        </p>
        <ol className="my-4 list-decimal space-y-2 pl-6">
          <li>Descarregue a aplicação.</li>
          <li>
            Adicione os dados do seu negócio: NIF, número da conta bancária, morada e nome do
            negócio.
          </li>
          <li>Demora cerca de 10 minutos.</li>
          <li>Pronto. No fim do dia já pode receber pagamentos em Bitcoin.</li>
        </ol>
        <ul className="my-4 list-disc space-y-2 pl-6">
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
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {[
                ['Comissão', '1,5%.'],
                ['Fidelização', 'Nenhuma. Pode parar quando quiser.'],
                [
                  'As suas chaves',
                  'A Swiss Bitcoin Pay não guarda as suas chaves: é não-custodial.',
                ],
                [
                  'Dados pedidos',
                  'NIF, nome do negócio e morada são, em grande parte, informação que já é pública. O número da conta bancária serve para lhe enviarem os euros.',
                ],
              ].map(([k, v]) => (
                <tr key={k}>
                  <th className="border border-bridal-200 bg-bridal-100 p-2 align-top">{k}</th>
                  <td className="border border-bridal-200 p-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

      <section className="mt-10">
        <h2 className="font-semibold text-3xl">O guia, por ordem de utilidade</h2>
        {TIERS.map((tier) => (
          <div key={tier.id} className="mt-6">
            <h3 className="font-semibold text-xl">{tier.label}</h3>
            <p className="text-mountain-mist-500">{tier.note}</p>
            <ul className="mt-2 list-none space-y-1 p-0">
              {CHAPTERS.filter((c) => c.tier === tier.id).map((c) => (
                <li key={c.slug}>
                  <Link className="underline" href={`/apoio/${c.slug}`}>
                    {c.num}. {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-6">
          <Link className="underline" href="/apoio/perguntas-frequentes">
            Perguntas frequentes
          </Link>{' '}
          ·{' '}
          <Link className="underline" href="/apoio/folheto">
            Folheto para ver e imprimir
          </Link>{' '}
          ·{' '}
          <Link className="underline" href="/apoio/glossario">
            Glossário
          </Link>
        </p>
      </section>

      <Contact />
    </>
  );
}
