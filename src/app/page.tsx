import EmployeeListTable from "@/components/table/employeeListTable";
import prisma from "@/lib/prisma";

export default async function Home() {
  const employees = await prisma.employee.findMany({
    include: { defaultSalary: true },
  });
  return (
    <main className="p-4 w-full">
      <EmployeeListTable
        employees={employees.map((e) => ({
          ...e,
          salarySlips: [],
          defaultSalary: { ...e.defaultSalary, defaultFor: e },
        }))}
      />
    </main>
  );
}
