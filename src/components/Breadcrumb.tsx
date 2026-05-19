import * as React from 'react';
import { cn } from '../lib/utils';

export function Breadcrumb({ ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav aria-label="breadcrumb" {...props} />;
}

export function BreadcrumbList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'ol'>) {
  return (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'li'>) {
  return <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />;
}

export function BreadcrumbLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a className={cn('transition-colors hover:text-foreground', className)} {...props} />
  );
}

export function BreadcrumbPage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  );
}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li role="presentation" aria-hidden className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)} {...props}>
      {children ?? <span>/</span>}
    </li>
  );
}
