import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import whatsappQr from '@/assets/images/apoio/whatsapp-support-qr.svg';
import { PrintButton } from '@/components/apoio/PrintButton';
import { MERCHANT_EMAIL, WHATSAPP_SUPPORT_URL } from '@/data/apoio/contact';
import { FLYER } from '@/data/apoio/flyer';

export const metadata: Metadata = { title: 'Folheto para comerciantes' };

const { front, back } = FLYER;

export default function FlyerPage() {
  return (
    <article>
      {/* The site header and footer are not part of the flyer. */}
      <style>{'@media print { body > header, body > footer { display: none; } }'}</style>

      <div className="print:hidden">
        <p>
          <Link className="underline" href="/apoio">
            ← Início
          </Link>
        </p>
        <h1 className="mt-4 font-medium text-4xl leading-tight">Folheto para comerciantes</h1>
        <p className="my-3 text-lg text-mountain-mist-500">
          O folheto que deixamos nas lojas, para ver aqui e imprimir. Imprima em A4, frente e verso.
        </p>
        <PrintButton />
      </div>

      {/* Front */}
      <section className="mt-8 break-after-page rounded-xl border border-bridal-200 bg-white p-6 print:mt-0 print:rounded-none print:border-0">
        <h2 className="font-medium text-3xl leading-tight">{front.headline}</h2>
        <p className="mt-3 text-lg">{front.sub}</p>
        <ol className="mt-6 space-y-4">
          {front.reasons.map((r) => (
            <li key={r.title}>
              <strong className="block">{r.title}</strong>
              {r.body}
            </li>
          ))}
        </ol>
      </section>

      {/* Back */}
      <section className="mt-8 rounded-xl border border-bridal-200 bg-white p-6 print:mt-0 print:rounded-none print:border-0">
        <h2 className="font-medium text-3xl leading-tight">{back.headline}</h2>
        <p className="mt-1 text-mountain-mist-500">{back.sub}</p>
        <ol className="my-4 list-decimal space-y-1 pl-6">
          {back.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <h3 className="mt-6 font-semibold text-xl">{back.easyHeading}</h3>
        <ul className="my-2 list-disc space-y-1 pl-6">
          {back.easy.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">{back.holdHeading}</h3>
        <ul className="my-2 list-disc space-y-1 pl-6">
          {back.hold.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">{back.tiersHeading}</h3>
        <p>{back.tiersBody}</p>
        <table className="my-2 w-full border-collapse text-left text-sm">
          <tbody>
            {back.tiers.map(([range, advice]) => (
              <tr key={range}>
                <th className="border border-bridal-200 p-2">{range}</th>
                <td className="border border-bridal-200 p-2">{advice}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="mt-6 font-semibold text-xl">{back.optionsHeading}</h3>
        <ul className="my-2 list-disc space-y-1 pl-6">
          {back.options.map(([name, body]) => (
            <li key={name}>
              <strong>{name}.</strong> {body}
            </li>
          ))}
        </ul>

        <h3 className="mt-6 font-semibold text-xl">{back.troubleHeading}</h3>
        <p>{back.trouble}</p>

        <h3 className="mt-6 font-semibold text-xl">{back.faqHeading}</h3>
        <dl className="my-2 space-y-2">
          {back.faq.map(([q, a]) => (
            <div key={q}>
              <dt className="font-semibold">{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-bridal-200 border-t pt-4">
          <Image
            src={whatsappQr}
            alt="Código QR do grupo de apoio a comerciantes no WhatsApp"
            width={110}
            height={110}
          />
          <div className="max-w-md text-sm">
            <p>{back.blurb}</p>
            <p className="mt-2">
              Grupo de apoio a comerciantes no WhatsApp: leia o código QR.
              <br />
              {MERCHANT_EMAIL}
            </p>
          </div>
        </div>
        <p className="mt-2 text-mountain-mist-500 text-xs print:hidden">
          Ligação do grupo:{' '}
          <a className="underline" href={WHATSAPP_SUPPORT_URL}>
            WhatsApp
          </a>
        </p>
      </section>
    </article>
  );
}
