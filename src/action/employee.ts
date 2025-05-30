"use server";

import { Education, Employee, Prisma, Role } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import zodErrorHandler from "@/lib/zodErrorHandler";
import { education, roles } from "@/type/enum";
import { revalidatePath } from "next/cache";
import { z, ZodError } from "zod";

const employeeUpdateSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  role: z.enum(roles as [Role]).optional(),
  lastEducation: z.enum(education as [Education]).optional(),
});
const employeeCreateSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
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
    console.log(error);
    if (error instanceof ZodError) return new Error(zodErrorHandler(error));
    if (error instanceof Error) return error;
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
    console.log(error);
    if (error instanceof ZodError) return new Error(zodErrorHandler(error));
    if (error instanceof Error) return error;
  }
}
