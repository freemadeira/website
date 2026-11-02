// Seam for the future living FAQ (visitors' questions, answered on FreeHub). Every content
// page renders this at its end and nothing else on the page knows about questions.
// Deliberately renders nothing: the other side is not designed yet. Do not add network
// code here until that spec exists.
export function QaSlot({ page }: { page: string }): null {
  void page;
  return null;
}
