import { NextResponse } from "next/server";
import PDFComponent from "./_pdfComponent";
import { renderToStream } from "@react-pdf/renderer";
import prisma from "@/lib/prisma";

type Props = {
  params: Promise<{ [key: string]: string }>;
};

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;

  const slip = await prisma.salarySlipReport.findUnique({
    where: { id },
    include: { employee: true, salarySlip: true },
  });
  if (!slip) {
    throw new Error("Invalid Slip Data");
  }

  const baseUrl = `${
    request.headers.get("x-forwarded-proto") || "http"
  }://${request.headers.get("host")}`;
  const kopUrl = `${baseUrl}/kop.png`;
  const stream = await renderToStream(
    await PDFComponent({
      filter: { slip },
      kop: kopUrl,
    })
  );

  return new NextResponse(stream as unknown as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="SalarySlip-${slip.date.toLocaleString(
        "default",
        {
          month: "long",
          year: "numeric",
        }
      )}.pdf"`,
    },
  });
}
