import Image from 'next/image';

import { AtlantisCta } from './AtlantisCta';
import whatsappQr from '@/assets/images/apoio/whatsapp-support-qr.svg';
import { MERCHANT_EMAIL, WHATSAPP_SUPPORT_URL } from '@/data/apoio/contact';

export function Contact(): React.ReactElement {
  return (
    <>
      <AtlantisCta />
      <section aria-labelledby="apoio-contact" className="mt-6 border-(--ap-line) border-t pt-8">
        <h2 id="apoio-contact" className="text-3xl">
          Dúvidas? Algum problema?
        </h2>
        <p className="my-3">
          Somos a FREE Madeira, uma associação sem fins lucrativos, fundada em 2022, a equipa por
          detrás da Bitcoin Atlantis. Ajudamos a configurar tudo, de graça, e temos todo o gosto em
          ajudar se algo correr mal.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={WHATSAPP_SUPPORT_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={whatsappQr}
              alt="Apoio a comerciantes no WhatsApp"
              width={120}
              height={120}
              className="rounded bg-white p-1.5"
            />
          </a>
          <div>
            <p>
              <a
                className="underline"
                href={WHATSAPP_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Grupo de apoio a comerciantes no WhatsApp
              </a>
              <br />
              Perguntas em direto com a FREE e outros comerciantes.
            </p>
            <p className="mt-2">
              <a className="underline" href={`mailto:${MERCHANT_EMAIL}`}>
                {MERCHANT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
