import Link from 'next/link';

import { MERCHANT_EMAIL } from '@/data/apoio/contact';

const subject = encodeURIComponent('Comerciante no Bitcoin Atlantis');

export function AtlantisCta(): React.ReactElement {
  return (
    <section
      aria-labelledby="apoio-atlantis"
      className="ap-band my-14 px-6 py-8 sm:px-10 sm:py-10 print:hidden"
    >
      <h2 id="apoio-atlantis" className="text-3xl">
        Seja comerciante no Bitcoin Atlantis
      </h2>
      <p className="my-4 max-w-[34rem]">
        Quer estar no Bitcoin Atlantis como comerciante? Escreva-nos e dizemos-lhe os próximos
        passos. E se quiser apoiar a FREE Madeira e o Atlantis como patrocinador, veja como.
      </p>
      <div className="flex flex-wrap gap-3">
        <a className="ap-btn" href={`mailto:${MERCHANT_EMAIL}?subject=${subject}`}>
          Quero ser comerciante no Atlantis
        </a>
        <Link className="ap-btn ap-btn--line" href="/partnerships">
          Patrocínios e parcerias
        </Link>
      </div>
    </section>
  );
}
