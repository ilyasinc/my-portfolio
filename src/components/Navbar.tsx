import Settings, { Pulse } from '@/components/Settings';
import Button from './Button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
export default function Navbar() {
  return (
    <nav className="flex justify-center w-screen mb-10 ">
      <div className=" bg-gray-200 px-5 py-5 rounded-2xl shadow-black/60 shadow-2xl dark:bg-black dark:shadow-teal-500">
        <div className="font-mono text-sm  inline-flex items-center gap-5">
          <div>
            <Pulse className="bg-teal-500" />
          </div>
          Available
          <Button href="mailto:haider@ilyasinc.com?subject=Hey Haider ...">
            Talk to me
            <PaperAirplaneIcon className="h-4 w-4" />
          </Button>
          <Settings />
        </div>
      </div>
    </nav>
  );
}
