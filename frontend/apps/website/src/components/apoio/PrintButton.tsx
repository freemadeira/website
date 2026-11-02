'use client';

export function PrintButton(): React.ReactElement {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg bg-primary-400 px-5 py-2 font-semibold text-dark print:hidden"
    >
      Imprimir o folheto
    </button>
  );
}
