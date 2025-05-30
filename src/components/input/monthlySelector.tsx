"use client";

import useSP from "@/hooks/useSP";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import EachUtils from "../utils/eachUtils";
import { SelectTrigger } from "@radix-ui/react-select";
import { Button } from "../ui/button";

const months = [
  { value: "0", label: "Januari" },
  { value: "1", label: "Februari" },
  { value: "2", label: "Maret" },
  { value: "3", label: "April" },
  { value: "4", label: "Mei" },
  { value: "5", label: "Juni" },
  { value: "6", label: "Juli" },
  { value: "7", label: "Agustus" },
  { value: "8", label: "September" },
  { value: "9", label: "Oktober" },
  { value: "10", label: "November" },
  { value: "11", label: "Desember" },
];

type Props = {
  className?: string;
  onMonthChange?: (value: string) => void;
  onYearChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: Date;
};

export default function MonthlySelector({
  className,
  onMonthChange,
  onYearChange,
  value,
}: Props) {
  const { sp, replace } = useSP();
  const spDate = sp.get("date");
  const date = value ? value : spDate ? new Date(Number(spDate)) : new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const handleMonthChange = onMonthChange
    ? onMonthChange
    : (value: string) => {
        const newDate = new Date(date);
        newDate.setMonth(Number(value));
        replace({ key: "date", value: newDate.getTime().toString() });
      };

  const handleYearChange = onYearChange
    ? onYearChange
    : (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = new Date(date);
        newDate.setFullYear(Number(e.target.value));
        replace({ key: "date", value: newDate.getTime().toString() });
      };

  return (
    <div className={cn("flex gap-4 items-center ", className)}>
      <Select
        value={month.toString()}
        onValueChange={handleMonthChange}
        name="month"
      >
        <SelectTrigger asChild>
          <Button variant="outline">{months[month].label}</Button>
        </SelectTrigger>
        <SelectContent>
          <EachUtils
            of={months}
            render={(m) => (
              <SelectItem key={m.value} value={m.value}>
                {m.label}
              </SelectItem>
            )}
          />
        </SelectContent>
      </Select>
      <Input
        type="number"
        value={year}
        min={2000}
        max={2100}
        onChange={handleYearChange}
        className="w-24"
        name="year"
      />
    </div>
  );
}
