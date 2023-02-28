import { AnchorHTMLAttributes, forwardRef, Fragment } from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { Menu, Transition } from '@headlessui/react';
import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/solid';
import { CogIcon } from '@heroicons/react/24/solid';
interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active: boolean;
}

const StyledMenuItem = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  function StyledMenuItem({ active, children, className, ...rest }, ref) {
    return (
      <a
        className={clsx(
          'flex items-center gap-1 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default-transition text-black dark:text-white',
          active
            ? 'bg-gray-100/50 text-black dark:bg-gray-700/50 dark:text-white'
            : 'text-black hover:text-gray-700 dark:hover:text-white',
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
export function Pulse() {
  return (
    <span className="relative flex h-2 w-2 mr-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 "></span>
    </span>
  );
}
const Settings = () => {
  const { theme, setTheme } = useTheme();

  const settingItems = [
    {
      icon: theme === 'light' ? Pulse() : undefined,
      text: 'Light Theme',
      onClick: () => setTheme('light'),
    },
    {
      icon: theme === 'dark' ? Pulse() : undefined,
      text: 'Dark Theme',
      onClick: () => setTheme('dark'),
    },
    {
      icon: theme === 'system' ? Pulse() : undefined,
      text: 'System Theme',
      onClick: () => setTheme('system'),
    },
  ];
  console.log(settingItems);
  return (
    <>
      <Menu as="div" className="relative inline-block ">
        {({ open }): JSX.Element => (
          <>
            <Menu.Button className=" bg-teal-500 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-teal-800 active:text-teal-900/70 dark:bg-black  dark:border-teal-500 dark:hover:bg-teal-400 dark:border-2 dark:active:bg-teal-400 dark:active:text-zinc-100/70 inline-flex items-center justify-center rounded-md py-2 px-3 transition active:transition-none  ">
              <h1>Settings</h1>
              <CogIcon
                className="h-6 w-6 dark:text-text-white text-white"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              appear={true}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              show={open}
            >
              <Menu.Items className="absolute right-0 sm:w-30 mt-1 bg-gray-200 text-black  dark:bg-black dark:bg-opacity-75 backdrop-filter backdrop-blur-sm  border-teal-500 dark:border-teal-500 rounded-md shadow-xl border-2 divide-y divide-teal-400 dark:divide-teal-500 focus:outline-none font-thin">
                {settingItems.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <StyledMenuItem active={active} onClick={item.onClick}>
                          {item.icon}
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
