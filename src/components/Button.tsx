import Link from 'next/link';
import clsx from 'clsx';
import { LinkProps } from 'next/link';

import { WithClassName, WithChildren } from '@/types/common';

interface ButtonProps extends WithClassName, WithChildren {
  href?: string;
  variant?: string;
  onClick?: string;
  externalLink?: boolean;
}
interface stylesType {
  [key: string]: string;
  primary: string;
}
const variantStyles: stylesType = {
  primary:
    'bg-none font-semibold bg-teal-500 text-white hover:bg-zinc-700 rounded-lg dark:bg-black dark:hover:bg-teal-500  dark:border-teal-500 dark:border-2',
};

type LinkButtonProps = ButtonProps & LinkProps;

const Button: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  className,
  href,
  children,
  externalLink = false,
  ...props
}) => {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none w-full ',
    variantStyles[variant],
    className
  );

  return (
    <Link
      href={href}
      className={className}
      target={externalLink ? '_blank' : undefined}
      {...props}
    >
      {children}
    </Link>
  );
};
export default Button;
