import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-16 flex h-full flex-col items-center justify-center gap-10">
      <Image
        src="/free-madeira-logo.svg"
        alt="Vercel Logo"
        width={400}
        height={400}
      />

      <h1 className="text-center font-bold text-lg text-zinc-700 sm:text-3xl">
        New website coming soon!
      </h1>
    </div>
  );
}
