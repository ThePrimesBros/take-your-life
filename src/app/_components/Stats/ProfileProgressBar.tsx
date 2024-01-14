import { FunctionComponent } from "react";

// ProgressBar.tsx
interface ProgressBarProps {
    value: number;
    max: number;
  }
  
  export const ProfileProgressBar: FunctionComponent<ProgressBarProps> = ({ value, max }) => {
    const widthPercentage = `${(value / max) * 100}%`;
  
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border-black border-2 h-3">
        <div
          className="bg-blue-600 h-full"
          style={{ width: widthPercentage }}
        ></div>
      </div>
    );
  };
  