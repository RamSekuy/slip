import SalarySlipTable from "@/components/table/salarySlipTable";
import { dateMonthlyFormat } from "@/lib/dateMonthlyFormat";
import prisma from "@/lib/prisma";

type Props = {
  searchParams: Promise<{ employee: string; date: string }>;
};

export default async function Page({ searchParams }: Props) {
  try {
    const sp = await searchParams;
    const employee = sp.employee;
    const date = sp.date || new Date();

    const slip = await prisma.salarySlipReport.findUnique({
      where: {
        employeeId_date: {
          employeeId: employee,
          date: dateMonthlyFormat(new Date(Number(date))),
        },
      },
      include: { salarySlip: true },
    });
    if (slip === null)
      throw new Error("Salary slip not found for the given employee and date");
    return (
      <div className="mt-4 p-4 w-full">
        <SalarySlipTable salarySlip={slip.salarySlip} />
      </div>
    );
  } catch (error) {
    return (
      <>
        <div className="text-center w-full px-8">
          <h1 className="text-2xl text-red-500">
            Error:{" "}
            {error instanceof Error
              ? error.message
              : "An unexpected error occurred"}
          </h1>
        </div>
      </>
    );
  }
}
