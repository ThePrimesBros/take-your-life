// Profile.tsx
import { FunctionComponent } from "react";
import Image from "next/image";
import { ProfileProgressBar } from "./ProfileProgressBar";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface ProfileProps {
  name: string;
  level: number;
  expGain: number;
  image: string;
}

export const Profile: FunctionComponent<ProfileProps> = ({
  name,
  level,
  expGain,
  image,
}) => {
  // Assuming the max experience for the next level is 100 for simplicity
  const maxExp = 100;

  return (
    <div className="flex justify-around items-center bg-gray-800 shadow-inner shadow-black p-4">
      <div className="relative w-2/5 mx-2">
        {/* Hover container */}
        <div className="relative group">
          {/* Image component */}
          <Image
            src={image}
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full hover:bg-sky-700 transition duration-300 ease-in-out"
          />
          {/* Hover text */}
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-full">
            <span className="text-white text-md text-center"><PencilSquareIcon className="block h-6 w-6" aria-hidden="true" /></span>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <h2 className="text-lg text-white font-bold">{name}</h2>
        <div className="text-sm text-gray-400 mb-1">Level: {level}</div>
        <ProfileProgressBar value={expGain} max={maxExp} />
      </div>
    </div>
  );
};
