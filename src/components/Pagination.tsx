import * as React from 'react';
import { cn } from '../lib/utils';
import { Button, type ButtonProps } from './Button';

export function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

export function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}

export function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

export function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted',
        isActive && 'border bg-background shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

export function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <PaginationLink aria-label="Go to previous page" className={cn('w-auto px-3', className)} {...props}>
      Previous
    </PaginationLink>
  );
}

export function PaginationNext({
  className,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <PaginationLink aria-label="Go to next page" className={cn('w-auto px-3', className)} {...props}>
      Next
    </PaginationLink>
  );
}

export function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      …
    </span>
  );
}
