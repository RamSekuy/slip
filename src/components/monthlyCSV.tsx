"use client";
import { CSVLink } from "react-csv";
import { SalarySlipExtend, SalarySlipReportExtend } from "@/type/prismaExtend";
import { Button } from "./ui/button";

// Daftar key SalarySlip yang int (lihat schema)
const slipKeys = [
  "gajiPokok",
  "masaKerja",
  "tunjanganJabatan",
  "tunjanganfungsional",
  "waliKelas",
  "kurikulum",
  "kesiswaan",
  "bendahara",
  "operasionalSD",
  "operasionalSMP",
  "operasionalSMA",
  "media",
  "tunjanganKesehatan",
  "kehadiran",
  "kbmTahfidz",
  "kbmFormal",
  "inval",
  "gTerbang",
  "tunjanganMakan",
  "tunjanganTinggal",
  "seragam",
  "sedekah",
  "kasbon",
  "denda",
];

export default function MonthlyCSV({
  data,
  date,
}: {
  data: SalarySlipReportExtend[];
  date?: Date;
}) {
  if (!date) return <></>;

  // Header CSV
  const header = ["nama", "jabatan", "status", ...slipKeys];

  // Data CSV
  const rebuildData = data.map((e) => [
    e.employee.name,
    e.employee.role,
    e.employee.lastEducation,
    ...slipKeys.map((k) => e.salarySlip?.[k as keyof SalarySlipExtend] ?? 0),
  ]);

  // Gabungkan header dan data sesuai contoh react-csv
  const csvData = [header, ...rebuildData];

  return (
    <CSVLink
      data={csvData}
      separator=";"
      filename={`slip-bulanan-${date.getMonth() + 1}-${date.getFullYear()}.csv`}
    >
      <Button>Download Monthly Report</Button>
    </CSVLink>
  );
}
