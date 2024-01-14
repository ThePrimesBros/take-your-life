import { FunctionComponent } from 'react';
import { HeartIcon, BoltIcon, FireIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  icon: 'health' | 'sport' | 'social' | 'discipline' | 'education' | 'mental'
}

const icons = {
  health: <Image src="/health.png" alt="heart icon" width={100} height={100} />,
  sport: <Image src="/sport.png" alt="sport icon" width={100} height={100} />,
  social: <Image src="/social.png" alt="social icon" width={100} height={100} />,
  discipline: <Image src="/discipline.png" alt="discipline icon" width={100} height={100} />,
  education: <Image src="/education.png" alt="education icon" width={100} height={100} />,
  mental: <Image src="/mental.png" alt="mental icon" width={100} height={100} />,
};

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ label, value, max, icon }) => {
  const IconComponent = icons[icon];
  const widthPercentage = `${(value / max) * 100}%`;

  return (
    <div className="relative flex border-2 border-black shadow-inner shadow-black items-center bg-slate-800 w-11/12 mx-auto rounded-sm h-10 my-10">
      <div className="flex-shrink-0 -ml-5 z-10">{IconComponent}</div>
      <div className='w-1/3 text-center'>{label}</div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 mx-3 border-black border-2 h-7">
        <div
          className="text-md font-bold text-black text-center p-1 leading-none bg-gray-400 h-full"
          style={{ width: widthPercentage }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};
