import prisma from "@/lib/prisma";
import { EmployeeSelector } from "./employeeSelector";

export default async function EmployeeSelectorFetch() {
  return <EmployeeSelector employees={await prisma.employee.findMany()} />;
}
