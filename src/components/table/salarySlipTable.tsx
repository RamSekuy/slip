"use client";
import { useState } from "react";
import { SalarySlipExtend } from "@/type/prismaExtend";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import EachUtils from "@/components/utils/eachUtils";
import { Button } from "@/components/ui/button";
import IntInput from "@/components/intInput";
import { updateSalarySlip } from "@/action/salarySlip";
import MonthlySelector from "../input/monthlySelector";
import { createSalarySlipReport } from "@/action/salarySlipReport";
import actionToast from "@/components/actionToast";
const intFields: { key: keyof SalarySlipExtend; label: string }[] = [
  { key: "gajiPokok", label: "Gaji Pokok" },
  { key: "masaKerja", label: "Masa Kerja" },
  { key: "tunjanganJabatan", label: "Tunjangan Jabatan" },
  { key: "tunjanganfungsional", label: "Tunjangan Fungsional" },
  { key: "waliKelas", label: "Wali Kelas" },
  { key: "kurikulum", label: "Kurikulum" },
  { key: "kesiswaan", label: "Kesiswaan" },
  { key: "bendahara", label: "Bendahara" },
  { key: "operasionalSD", label: "Operasional SD" },
  { key: "operasionalSMP", label: "Operasional SMP" },
  { key: "operasionalSMA", label: "Operasional SMA" },
  { key: "media", label: "Media" },
  { key: "tunjanganKesehatan", label: "Tunjangan Kesehatan" },
  { key: "kehadiran", label: "Kehadiran" },
  { key: "kbmTahfidz", label: "KBM Tahfidz" },
  { key: "kbmFormal", label: "KBM Formal" },
  { key: "inval", label: "Inval" },
  { key: "gTerbang", label: "G. Terbang" },
  { key: "tunjanganMakan", label: "Tunjangan Makan" },
  { key: "tunjanganTinggal", label: "Tunjangan Tinggal" },
  { key: "seragam", label: "Seragam" },
  { key: "sedekah", label: "Sedekah" },
  { key: "kasbon", label: "Kasbon" },
  { key: "denda", label: "Denda" },
];

function toIDR(num: number) {
  return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

type Props = {
  salarySlip?: SalarySlipExtend;
  type?: "create report" | "update slip" | "look";
};

type Slip = Partial<SalarySlipExtend>;

export default function SalarySlipTable({ salarySlip, type = "look" }: Props) {
  const defaultV = { ...salarySlip };
  const [form, setForm] = useState<Slip>(defaultV);
  const [date, setDate] = useState<Date>(new Date());

  const handleCancel = () => setForm(defaultV);

  const handleUpdate = () => {
    actionToast(updateSalarySlip(form?.id || "", form));
  };

  const createNewSlip = () => {
    actionToast(createSalarySlipReport(form.defaultFor?.id || "", date, form));
  };

  // onChange handler untuk input number
  const handleNumberChange = (key: keyof SalarySlipExtend, value: string) => {
    setForm((prev) => {
      return prev
        ? {
            ...prev,
            [key]: Number(value),
          }
        : prev;
    });
  };

  // Hitung total semua field int
  const total = intFields.reduce((acc, field) => {
    const value = form[field.key];
    return acc + (typeof value === "number" ? value : 0);
  }, 0);

  return (
    <>
      <Table>
        <TableBody>
          {type == "create report" && (
            <TableRow>
              <TableCell className="font-bold pr-4">Date</TableCell>
              <TableCell>
                <MonthlySelector
                  value={date}
                  onMonthChange={(e) => {
                    setDate(new Date(date.setMonth(Number(e))));
                  }}
                  onYearChange={(e) => {
                    setDate(new Date(date.setFullYear(Number(e.target.value))));
                  }}
                />
              </TableCell>
            </TableRow>
          )}
          <EachUtils
            of={intFields}
            render={(field) => {
              const value = form[field.key];
              console.log(field.key, typeof value);
              return (
                <TableRow>
                  <TableCell className="font-bold pr-4">
                    {field.label}
                  </TableCell>
                  <TableCell>
                    {type === "look"
                      ? typeof value === "number"
                        ? toIDR(value)
                        : ""
                      : typeof value === "number" && (
                          <IntInput
                            value={value}
                            onChange={(v) =>
                              handleNumberChange(field.key, String(v))
                            }
                          />
                        )}
                  </TableCell>
                </TableRow>
              );
            }}
          />
          <TableRow>
            <TableCell className="font-bold pr-4">Total</TableCell>
            <TableCell className="font-bold">{toIDR(total)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {type !== "look" && (
        <div className="flex gap-2 mt-4 w-full justify-end">
          <Button variant="outline" onClick={handleCancel}>
            Reset
          </Button>
          {type === "update slip" && (
            <Button onClick={handleUpdate}>Update</Button>
          )}
          {type === "create report" && (
            <Button onClick={createNewSlip}>Create New Slip</Button>
          )}
        </div>
      )}
    </>
  );
}
