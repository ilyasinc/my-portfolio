import { PropsWithChildren } from 'react';

export type WithClassName<T = Record<string, unknown>> = T & {
  className?: string;
};

export type WithChildren<T = Record<string, unknown>> = PropsWithChildren<T>;
