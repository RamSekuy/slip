import prismaErrorCodeHandler from "@/lib/prismaErrorCodeHandler";
import zodErrorHandler from "@/lib/zodErrorHandler";
import { ZodError } from "zod";

export default function actionErrorHandler(error: unknown) {
  console.log(error);
  if (error instanceof ZodError) return zodErrorHandler(error);
  if (error instanceof Error) {
    if ("code" in error) return prismaErrorCodeHandler(String(error.code));
    return error;
  }
}
