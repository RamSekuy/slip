"use server";
import transporter from "@/lib/nodemailer";
import { z } from "zod";
import actionErrorHandler from "./actionErrorHandler";

type SendMailOptions = { email: string; slipUrl: string };

export async function sendMail(...employees: SendMailOptions[]) {
  try {
    const optionSchema = z
      .array(
        z.object({
          email: z.string().email(),
          slipUrl: z.string().url(),
        })
      )
      .min(1);
    const options = optionSchema.parse(employees);

    const mails = options.map(async ({ email, slipUrl }) => {
      const res = await fetch(slipUrl);
      const splitURL = slipUrl.split("/");
      if (!res.ok) throw new Error("Gagal download PDF");
      const pdfBuffer = Buffer.from(await res.arrayBuffer());
      return {
        email,
        pdfBuffer,
        slipId: splitURL[splitURL.length - 1],
      };
    });

    for (const { email, pdfBuffer, slipId } of await Promise.all(mails)) {
      await transporter.sendMail({
        from: "test@servver.com",
        to: email,
        subject: "Slip Gaji Bulanan",
        html: `<h1>Berikut adalah slip gaji Anda.</h1><p>id: ${slipId}</p>`,
        attachments: [
          {
            filename: "SlipGaji.pdf",
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ],
      });
    }
  } catch (error) {
    return actionErrorHandler(error);
  }
}
