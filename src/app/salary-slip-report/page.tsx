import SlipReportTable from "@/components/table/slipReportTable";
import prisma from "@/lib/prisma";
import { dateMonthlyFormat } from "@/lib/dateMonthlyFormat";
import MonthlyCSV from "@/components/monthlyCSV";
import Center from "@/components/utils/center";

type Props = {
  searchParams: Promise<{ employee: string; date: string }>;
};

export default async function Page({ searchParams }: Props) {
  const sp = await searchParams;
  const spDate = sp.date;
  const date = !spDate
    ? dateMonthlyFormat(new Date())
    : dateMonthlyFormat(new Date(Number(spDate)));

  const slips = await prisma.salarySlipReport.findMany({
    where: { date },
    include: { salarySlip: true, employee: true },
  });
  return (
    <main className="px-4">
      <SlipReportTable data={slips} />
      {slips.length > 0 && (
        <Center>
          <MonthlyCSV data={slips} date={date} />
        </Center>
      )}
    </main>
  );
}
