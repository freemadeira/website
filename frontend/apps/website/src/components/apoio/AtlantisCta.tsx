import Link from 'next/link';

import { MERCHANT_EMAIL } from '@/data/apoio/contact';

const subject = encodeURIComponent('Comerciante no Bitcoin Atlantis');

export function AtlantisCta(): React.ReactElement {
  return (
    <section
      aria-labelledby="apoio-atlantis"
      className="my-12 rounded-xl bg-dark p-6 text-white print:hidden"
    >
      <h2 id="apoio-atlantis" className="font-semibold text-2xl">
        Seja comerciante no Bitcoin Atlantis
      </h2>
      <p className="my-3">
        Quer estar no Bitcoin Atlantis como comerciante? Escreva-nos e dizemos-lhe os próximos
        passos. E se quiser apoiar a FREE Madeira e o Atlantis como patrocinador, veja como.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          className="rounded-lg bg-primary-400 px-5 py-2 font-semibold text-dark"
          href={`mailto:${MERCHANT_EMAIL}?subject=${subject}`}
        >
          Quero ser comerciante no Atlantis
        </a>
        <Link
          className="rounded-lg border border-white px-5 py-2 font-semibold"
          href="/partnerships"
        >
          Patrocínios e parcerias
        </Link>
      </div>
    </section>
  );
}
