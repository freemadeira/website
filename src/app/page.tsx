import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-16 flex h-full flex-col items-center justify-center gap-10">
      <Image src="/free-madeira-logo.svg" alt="Vercel Logo" width={400} height={400} />

      <h1 className="text-center font-bold text-lg text-zinc-700 sm:text-3xl">
        New website coming soon!
      </h1>

      <p className="text-center text-base text-zinc-500 sm:text-lg">
        In the meantime, visit our shop at{' '}
        <Link href="https://shop.freemadeira.org" className="font-bold text-yellow-900">
          shop.freemadeira.org
        </Link>
      </p>
    </div>
  );
}
