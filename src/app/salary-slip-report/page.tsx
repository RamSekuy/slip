import SlipReportTable from "@/components/table/slipReportTable";
import prisma from "@/lib/prisma";
import { dateMonthlyFormat } from "@/lib/dateMonthlyFormat";

type Props = {
  searchParams: Promise<{ employee: string; date: string }>;
};

export default async function Page({ searchParams }: Props) {
  const sp = await searchParams;
  const date = sp.date;

  const slips = await prisma.salarySlipReport.findMany({
    where: {
      date: !date ? undefined : dateMonthlyFormat(new Date(Number(date))),
    },
    include: { salarySlip: true, employee: true },
  });
  return (
    <main className="px-4">
      <SlipReportTable data={slips} />;
    </main>
  );
}
