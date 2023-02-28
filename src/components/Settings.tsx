import { AnchorHTMLAttributes, forwardRef, Fragment } from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { Menu, Transition } from '@headlessui/react';

import { CogIcon } from '@heroicons/react/24/solid';
interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active: boolean;
}

const StyledMenuItem = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  function StyledMenuItem({ active, children, className, ...rest }, ref) {
    return (
      <a
        className={clsx(
          'flex items-center px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default-transition text-black dark:text-white',
          active
            ? 'bg-gray-100/50 text-black dark:bg-gray-700/50 dark:text-white'
            : 'text-gray-300 hover:text-gray-700 dark:hover:text-white',
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

const Settings = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const settingItems = [
    {
      icon: null,
      text: 'Light Theme',
      onClick: () => setTheme('light'),
    },
    {
      icon: null,
      text: 'Dark Theme',
      onClick: () => setTheme('dark'),
    },
    {
      icon: null,
      text: 'System Theme',
      onClick: () => setTheme('system'),
    },
  ];

  return (
    <>
      <Menu as="div" className="relative inline-block ">
        {({ open }): JSX.Element => (
          <>
            <Menu.Button className=" bg-teal-500 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-teal-800 active:text-teal-900/70 dark:bg-zinc-800 dark:hover:bg-teal-400 dark:active:bg-teal-400 dark:active:text-zinc-100/70 inline-flex items-center justify-center rounded-md py-2 px-3 transition active:transition-none  ">
              <CogIcon
                className="h-6 w-6 dark:text-teal-500 text-white"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              appear={true}
              enter="transition ease-in-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              show={open}
            >
              <Menu.Items className="flex  sm:w-26 mt-2 bg-gray-300 bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border-2 border-teal-500 dark:border-teal-500 rounded-md shadow-xl divide-y divide-teal-400 dark:divide-teal-500 focus:outline-none">
                {settingItems.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <StyledMenuItem active={active} onClick={item.onClick}>
                          {item.text}
                        </StyledMenuItem>
                      )}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};
export default Settings;
