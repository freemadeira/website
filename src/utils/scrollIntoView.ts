'use client';

export function scrollIntoView(
  id: string,
  offset = 0,
  behavior: ScrollBehavior = 'smooth',
  block: ScrollLogicalPosition = 'start',
) {
  const targetElement = document.getElementById(id);

  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    if (offset !== 0) {
      // Use scrollTo for custom offset
      window.scrollTo({
        top: offsetPosition,
        behavior: behavior,
      });
    } else {
      // Use scrollIntoView for standard behavior
      targetElement.scrollIntoView({
        behavior: behavior,
        block: block,
      });
    }
  } else {
    console.warn(`ScrollButton: Element with selector "${id}" not found`);
  }
}
