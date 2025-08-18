import React from 'react';

import { cn } from '@/utils/classes';

/**
 * A component that renders content visually hidden but accessible to screen readers.
 * Use this to provide additional context or instructions for assistive technologies without
 * cluttering the visual interface.
 */

interface ScreenReaderOnlyProps extends React.ComponentProps<'span'> {
  as?: React.ElementType;
}

export const ScreenReaderOnly = React.forwardRef<HTMLSpanElement, ScreenReaderOnlyProps>(
  ({ className, as: Component = 'span', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          // Visually hidden but accessible to screen readers
          '-m-px absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0',
          // Clip path for better browser support
          '[clip:rect(0,0,0,0)]',
          className,
        )}
        {...props}
      />
    );
  },
);

ScreenReaderOnly.displayName = 'ScreenReaderOnly';
