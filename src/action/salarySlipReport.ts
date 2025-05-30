"use server";

import { dateMonthlyFormat } from "@/lib/dateMonthlyFormat";
import { SalarySlip } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import zodErrorHandler from "@/lib/zodErrorHandler";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";

const salarySlipCreateSchema = z.object({
  gajiPokok: z.number().optional(),
  masaKerja: z.number().optional(),
  tunjanganJabatan: z.number().optional(),
  tunjanganfungsional: z.number().optional(),
  waliKelas: z.number().optional(),
  kurikulum: z.number().optional(),
  kesiswaan: z.number().optional(),
  bendahara: z.number().optional(),
  operasionalSD: z.number().optional(),
  operasionalSMP: z.number().optional(),
  operasionalSMA: z.number().optional(),
  media: z.number().optional(),
  tunjanganKesehatan: z.number().optional(),
  kehadiran: z.number().optional(),
  kbmTahfidz: z.number().optional(),
  kbmFormal: z.number().optional(),
  inval: z.number().optional(),
  gTerbang: z.number().optional(),
  tunjanganMakan: z.number().optional(),
  tunjanganTinggal: z.number().optional(),
  seragam: z.number().optional(),
  sedekah: z.number().optional(),
  kasbon: z.number().optional(),
  denda: z.number().optional(),
});

export async function createSalarySlipReport(
  employeeId: string,
  date: Date,
  slip: Partial<Omit<SalarySlip, "id" | "createdAt" | "updatedAt">>
) {
  try {
    const data = salarySlipCreateSchema.parse(slip);

    await prisma.salarySlipReport.create({
      data: {
        date: dateMonthlyFormat(date),
        employee: { connect: { id: employeeId } },
        salarySlip: {
          create: data,
        },
      },
    });

    revalidatePath("/salary-slip-report");
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) return new Error(zodErrorHandler(error));
    if (error instanceof Error) return error;
  }
}
