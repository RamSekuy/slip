import { Employee, SalarySlip, SalarySlipReport } from "@/lib/generated/prisma";

export type SalarySlipExtend = SalarySlip & {
  defaultFor?: Employee;
  report?: SalarySlipReport;
};

export type SalarySlipReportExtend = SalarySlipReport & {
  salarySlip?: SalarySlipExtend;
  employee: Employee;
};

export type EmployeeExtend = Employee & {
  salarySlips: SalarySlipExtend[];
  defaultSalary: SalarySlipExtend;
};
