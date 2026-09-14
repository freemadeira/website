import { Link } from '@/components/ui/atoms';
import { organisation } from '@/data/organisation';

export function LegalDetails(): React.ReactElement {
  const { registeredName, nipc, address, email } = organisation;

  return (
    <p className="text-pretty text-sm">
      {registeredName} · NIPC {nipc} · {address} ·{' '}
      <Link href={`mailto:${email}`} underline size="sm">
        {email}
      </Link>
    </p>
  );
}
