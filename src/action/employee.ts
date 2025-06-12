"use server";

import { Education, Employee, Prisma, Role } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { education, roles } from "@/type/enum";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import actionErrorHandler from "./actionErrorHandler";

const employeeUpdateSchema = z.object({
  name: z.string().trim().optional(),
  phoneNumber: z.string().email().trim().optional(),
  niy: z.string().email().trim().optional(),
  role: z.enum(roles as [Role]).optional(),
  lastEducation: z.enum(education as [Education]).optional(),
});
const employeeCreateSchema = z.object({
  name: z.string().min(3).trim(),
  phoneNumber: z.string().trim(),
  niy: z.string().trim(),
  role: z.enum(roles as [Role]),
  lastEducation: z.enum(education as [Education]),
});

export async function addEmployee(
  employee: Omit<Employee, "id" | "updatedAt" | "createdAt" | "defaultSalaryId">
) {
  try {
    const data = employeeCreateSchema.parse(employee);
    await prisma.employee.create({
      data: {
        ...data,
        defaultSalary: { create: {} },
      },
    });
    revalidatePath("/salary-slip-report");
    revalidatePath("/");
  } catch (error) {
    return actionErrorHandler(error);
  }
}

export async function updateEmployee(
  employeeId: string,
  employee: Partial<Omit<Employee, "id" | "updatedAt" | "createdAt">>
) {
  try {
    const data = employeeUpdateSchema.parse(employee);

    await prisma.employee.update({
      where: { id: employeeId },
      data,
    });
    revalidatePath("/salary-slip-report");
    revalidatePath("/");
  } catch (error) {
    return actionErrorHandler(error);
  }
}
