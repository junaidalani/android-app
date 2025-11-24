"use client";

import { useFontSize } from '@/context/font-size-provider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function FontSizeSwitcher() {
  const { fontSize, setFontSize } = useFontSize();

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="font-size-select">Font Size</label>
      <Select value={fontSize} onValueChange={(value) => setFontSize(value as any)}>
        <SelectTrigger id="font-size-select" className="w-[180px]">
          <SelectValue placeholder="Select size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sm">Small</SelectItem>
          <SelectItem value="base">Default</SelectItem>
          <SelectItem value="lg">Large</SelectItem>
          <SelectItem value="xl">Extra Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
