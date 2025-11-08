import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const underlineStyle = 'underline-offset-7 decoration-1';

export const underlineDecorationClasses = (prefix?: string): string => {
  const baseClasses = ['hover:underline', ...underlineStyle.split(' ')];

  if (prefix) {
    return baseClasses.map((cls) => cls.replace('hover:', `${prefix}:`)).join(' ');
  }

  return baseClasses.join(' ');
};
