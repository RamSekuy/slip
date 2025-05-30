"use client";

import { Select, SelectItem, SelectContent, SelectTrigger } from "../ui/select";
import EachUtils from "../utils/eachUtils";
import { SelectValue } from "@radix-ui/react-select";

export default function Selector({
  options = [],
  value,
  onChange,
  placeholder = "Select",
}: {
  placeholder?: string;
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <EachUtils
          of={options}
          render={(opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          )}
        />
      </SelectContent>
    </Select>
  );
}
