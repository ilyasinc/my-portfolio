import { FC } from 'react';
import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
}
const mainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col sm:justify-center  justify-start items-center bg-gray-200 dark:bg-black/60 h-screen ">
      <Navbar />
      {children}
    </main>
  );
};

export default mainLayout;
