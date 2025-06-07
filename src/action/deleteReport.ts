"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import actionErrorHandler from "./actionErrorHandler";

export async function deleteReport(ids: string[]) {
  try {
    await prisma.salarySlipReport.deleteMany({ where: { id: { in: ids } } });
    revalidatePath("/salary-slip-report");
    revalidatePath("/");
  } catch (error) {
    return actionErrorHandler(error);
  }
}
