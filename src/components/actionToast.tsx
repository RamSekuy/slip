import { toast } from "sonner";
type Props = {
  loading?: string;
  success?: string;
  error?: string | ((error: Error) => string);
};

const defaultProps: Props = {
  loading: "Loading...",
  success: "Success!",
  error: (err) => {
    return err.message;
  },
};
const style = { backgroundColor: "red", color: "white" };
export default async function actionToast(
  action: Promise<void | Error | string>,
  options?: Props
) {
  const { loading, success, error }: Props = { ...defaultProps, ...options };
  toast.promise(action, {
    loading: loading,
    success: (res) => {
      if (res !== undefined) {
        if (typeof error == "function")
          return {
            message: typeof res == "string" ? res : error(res),
            style,
          };
        else return { message: error, style };
      } else {
        return { message: success };
      }
    },
    error: (err) => {
      if (err instanceof Error) {
        console.error("[ERROR]: ", err.message);
        if ("code" in err) {
          return { message: String(err.code), style };
        }
        return { message: err.message, style };
      } else
        return {
          message: error instanceof Function ? error(err) : error,
          style,
        };
    },
  });
  if ((await action) == undefined) return true;
}
