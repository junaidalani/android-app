
// src/components/ui/islamic-star-icon.tsx
import type React from 'react';
import { cn } from '@/lib/utils';

interface IslamicStarIconProps extends React.SVGProps<SVGSVGElement> {
  iconType: 'filled' | 'outlined';
  // colorClassName is implicitly handled by `currentColor` and Tailwind text color classes on parent or this component
}

const IslamicStarIcon: React.FC<IslamicStarIconProps> = ({
  iconType,
  className,
  ...props
}) => {
  const baseClasses = "w-6 h-6"; // Default size, can be overridden by className

  // 8-Pointed Star (Rub el Hizb) - simplified
  // More complex paths can be used for a more traditional look
  const points = "50,5 58.8,25 79.1,20.9 69.1,41.2 79.1,61.8 58.8,57.7 50,77.6 41.2,57.7 20.9,61.8 30.9,41.2 20.9,20.9 41.2,25";


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 85" // Adjusted viewBox to better fit the typical star proportions
      fill={iconType === 'filled' ? 'currentColor' : 'none'}
      stroke={iconType === 'outlined' ? 'currentColor' : 'none'}
      strokeWidth={iconType === 'outlined' ? 4 : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(baseClasses, className)} // `className` will provide the color e.g. "text-primary"
      {...props}
      data-ai-hint="islamic star"
    >
      <polygon points={points} />
    </svg>
  );
};

export default IslamicStarIcon;
