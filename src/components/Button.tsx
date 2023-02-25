import Link from 'next/link';
import clsx from 'clsx';
import { LinkProps } from 'next/link';

import { WithClassName, WithChildren } from '@/types/common';

interface ButtonProps extends WithClassName, WithChildren {
  href?: string;
  variant?: string;
  onClick?: string;
}
interface stylesType {
  [key: string]: string;
  primary: string;
}
const variantStyles: stylesType = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-800 dark:hover:bg-teal-400 dark:active:bg-teal-400 dark:active:text-zinc-100/70',
};

type LinkButtonProps = ButtonProps & LinkProps;

const Button: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  className,
  href,
  children,
  ...props
}) => {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none ',
    variantStyles[variant],
    className
  );

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};
export default Button;
