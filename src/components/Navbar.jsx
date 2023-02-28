import Settings, { Pulse } from '@/components/Settings';

export default function Navbar() {
  return (
    <nav className="">
      <div className=" bg-gray-200 px-5 py-5 rounded-2xl shadow-black/50  shadow-2xl dark:bg-black">
        <div className=" flex flex-row items-center justify-evenly gap-10">
          <Pulse />
          <div>Status</div>
          <Settings />
        </div>{' '}
      </div>
    </nav>
  );
}
