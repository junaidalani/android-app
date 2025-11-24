
"use client";

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ label, color, onChange }: ColorPickerProps) {
  return (
    <div className="flex items-center justify-between">
      <Label>{label}</Label>
      <Input type="color" value={color} onChange={(e) => onChange(e.target.value)} className="w-24" />
    </div>
  );
}
