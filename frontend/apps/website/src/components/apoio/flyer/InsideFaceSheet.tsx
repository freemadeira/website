import { OpeningDoorsPanel } from './panels/OpeningDoorsPanel';
import { OptionsPanel } from './panels/OptionsPanel';
import { SupportPanel } from './panels/SupportPanel';

// Panels 2-3-4, read left to right as one continuous spread once fully unfolded.
export function InsideFaceSheet() {
  return (
    <div className="sheet sheet--inside">
      <OpeningDoorsPanel />
      <OptionsPanel />
      <SupportPanel />
    </div>
  );
}
