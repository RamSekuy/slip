import zodErrorHandler from "@/lib/zodErrorHandler";
import { toast } from "sonner";
import { ZodError } from "zod";
type Props = {
  loading?: string;
  success?: string;
  error: string | ((error: Error) => string);
};

const defaultProps: Props = {
  loading: "Loading...",
  success: "Success!",
  error: "An error occurred",
};
const style = { backgroundColor: "red", color: "white" };
export default async function actionToast(
  action: Promise<void | Error>,
  { loading, success, error }: Props = defaultProps
) {
  toast.promise(action, {
    loading: loading,
    success: (res) => {
      console.log(res instanceof ZodError);
      if (res instanceof ZodError) {
        return {
          message: zodErrorHandler(res),
          style,
        };
      }
      if (res instanceof Error) {
        if (typeof error == "function") return { message: error(res), style };
        else return { message: error, style };
      } else {
        return { message: success };
      }
    },
    error: (err) => {
      console.log("error", err instanceof ZodError);
      if (err instanceof ZodError) {
        return {
          message: zodErrorHandler(err),
          style,
        };
      } else if (err instanceof Error && err.message) {
        console.error(err.message);
        return { message: err.message, style };
      } else
        return {
          message: error instanceof Function ? error(err) : error,
          style,
        };
    },
  });
  action.catch((e) => {
    throw new Error("Action Fail");
  });
  return true;
}
