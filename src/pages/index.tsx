import Button from '@/components/Button';
import { Layout } from '@/components/layouts';
import Navbar from '@/components/Navbar';
import Settings, { Pulse } from '@/components/Settings';

import Image from 'next/image';

export default function Home() {
  const navigationItems = [
    {
      href: '/projects',
      icon: null,
      text: 'Projects',
    },
    {
      href: '/Blog',
      icon: null,
      text: 'Blog',
    },
    {
      href: '/About-me',
      icon: null,
      text: 'About me',
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
        {/* <div className="absolute top-0 z-10 p-[45px] sm:p-[50px] mg:p-[40px] lg:p-[90px] rounded-2xl shadow-black/50  shadow-2xl hover:-translate-y-4 hover:bg-white hover:backdrop-blur-[1em] transition dark:bg-black hover:shadow-teal-400">
          <div className="flex  items-center justify-evenly gap-10">
            <div>
              Status
              <Pulse />
            </div>
            <Settings />
          </div>
        </div> */}
        <Navbar />
        <div className="flex flex-col p-[45px] sm:p-[50px] mg:p-[40px] lg:p-[90px] rounded-2xl  shadow-black/50  shadow-2xl hover:-translate-y-4 hover:bg-white hover:backdrop-blur-[1em] transition dark:bg-black hover:shadow-teal-400">
          <div className="flex w-full justify-end"></div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/try1.png" width={300} height={300} alt="/" />
            <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full text-center">
              <div className="text-gray-600 dark:text-white/90 text-4xl sm:text-5xl md:text-5xl lg:text-6xl tracking-tight font-extrabold">
                Hello,I&apos;m Haider <br />{' '}
              </div>
              <div className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-700 dark:text-white/70 sm:text-lg md:text-xl md:max-w-3xl font-mono">
                Front-End Developer based in London
              </div>

              <div className=" grid grid-cols-2 gap-4 sm:flex sm:flex-row items-center justify-center  w-full mt-8 sm:mt-4 mb-2">
                {navigationItems.map((item, index) => {
                  return (
                    <div key={index}>
                      <Button href={item.href} variant="primary" className="">
                        {item.text}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout.Main>
    </>
  );
}
