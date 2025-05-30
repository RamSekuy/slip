import { ZodError } from "zod";

const zodErrorHandler = (err: ZodError) => {
  if (!err.isEmpty) {
    return err.issues[0].message;
  }
  return "Unknown validation error";
};

export default zodErrorHandler;
