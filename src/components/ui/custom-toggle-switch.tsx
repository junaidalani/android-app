
"use client";

import type React from 'react';
import { cn } from '@/lib/utils';

interface CustomToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
}

const CustomToggleSwitch: React.FC<CustomToggleSwitchProps> = ({
  id,
  checked,
  onChange,
  className,
}) => {
  return (
    <div className={cn("custom-toggle-switch-container flex items-center", className)}>
      <div className="toggle-wrapper">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="toggle-label">
          <span className="thumb"></span>
        </label>
      </div>
    </div>
  );
};

export default CustomToggleSwitch;
