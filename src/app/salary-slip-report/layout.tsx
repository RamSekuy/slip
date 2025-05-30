import EmployeeSelectorFetch from "@/components/input/employeeSelectorFetch";
import MonthlySelector from "@/components/input/monthlySelector";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full p-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-evenly p-4 w-full mb-8">
        <EmployeeSelectorFetch />
        <MonthlySelector />
      </div>
      {children}
    </main>
  );
}
