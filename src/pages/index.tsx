import Button from '@/components/Button';
import { Layout } from '@/components/layouts';
import Settings from '@/components/Settings';

import Image from 'next/image';

export default function Home() {
  const navigationItems = [
    {
      href: '/Projects',
      icon: null,
      text: 'Projects',
    },
    {
      href: '/Blog',
      icon: null,
      text: 'Blog',
    },
    {
      href: '/Github',
      icon: null,
      text: 'Github',
    },
  ];

  return (
    <>
      <Layout.Main>
        <Image src="/try1.png" width={300} height={300} alt="/" />
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full text-center">
          <div className="text-black dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-7xl tracking-tight font-extrabold">
            Hey, I&apos;m Haider.
          </div>

          <div className="flex sm:flex-row items-start justify-center gap-3 sm:space-x-4 sm:space-y-0 w-full mt-8 sm:mt-4">
            {navigationItems.map((item, index) => {
              return (
                <div key={index}>
                  <Button href={item.href} variant="primary">
                    {item.text}
                  </Button>
                </div>
              );
            })}
            <Settings />
          </div>
        </div>
      </Layout.Main>
    </>
  );
}
