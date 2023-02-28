import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
const mainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-10 bg-gray-200 dark:bg-black/60">
      {children}
    </main>
  );
};

export default mainLayout;
