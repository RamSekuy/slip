"use client";

import { useState } from "react";
import { SalarySlipReportExtend } from "@/type/prismaExtend";
import SalarySlipTable from "@/components/table/salarySlipTable";
import { DataTable } from "../ui/dataTable";
import { DialogContent, DialogTitle, Dialog } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import MonthlySelector from "../input/monthlySelector";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

type Props = {
  data: SalarySlipReportExtend[];
};

export default function SlipReportTable({ data }: Props) {
  const [open, setOpen] = useState(false);
  const sp = useSearchParams();
  const [selectedSlip, setSelectedSlip] =
    useState<SalarySlipReportExtend | null>(null);
  const date = sp.get("date");
  const columns = [
    {
      accessorKey: "id",
      header: ({ table }: any) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }: any) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: (ctx: any) => {
        const date = new Date(ctx.row.original.date);
        return date.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
      },
    },
    {
      id: "employeeName",
      header: "Name",
      accessorKey: "employee.name",
      cell: (ctx: any) => ctx.row.original.employee.name,
    },
    {
      id: "action",
      header: () => <div className="flex justify-end pr-8">Action</div>,
      cell: (ctx: any) => (
        <div className="flex justify-end pr-4">
          <Button
            onClick={() => {
              setSelectedSlip(ctx.row.original);
              setOpen(true);
            }}
          >
            Detail
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <DataTable
        renderTop={(table) => {
          const selecteds = table.getSelectedRowModel();
          console.log(selecteds.rows);
          return (
            <div className="mb-2 flex w-full justify-evenly">
              <Input
                className="border px-2 py-1 rounded w-full max-w-xs"
                placeholder="Filter by name..."
                onChange={(e) =>
                  table
                    .getColumn("employeeName")
                    ?.setFilterValue(e.target.value)
                }
              />
              <MonthlySelector
                value={date ? new Date(Number(sp.get("date"))) : new Date()}
              />
              <Button disabled={selecteds.rows.length < 1}>
                Send to Email
              </Button>
            </div>
          );
        }}
        columns={columns}
        data={data}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-[#eaeaea] border-black border-2 p-4 shadow-lg shadow-black/50">
          <DialogTitle className="my-4">Slip Details</DialogTitle>
          {selectedSlip && selectedSlip.salarySlip && (
            <Card>
              <CardContent className="max-h-[50dvh] overflow-y-auto space-y-2">
                <SalarySlipTable
                  type="look"
                  salarySlip={selectedSlip.salarySlip}
                />
              </CardContent>
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
