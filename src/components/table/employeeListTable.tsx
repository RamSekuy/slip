"use client";
import { DataTable } from "../ui/dataTable";
import { Input } from "@/components/ui/input";
import { ColumnDef } from "@tanstack/react-table";
import ModalEditEmployee from "../modal/modalEditEmployee";
import ModalCreateSlip from "../modal/modalCreateSlip";
import { EmployeeExtend } from "@/type/prismaExtend";

type Props = {
  employees: EmployeeExtend[];
};

export default function EmployeeListTable({ employees }: Props) {
  const columns: ColumnDef<EmployeeExtend>[] = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Education",
      accessorKey: "lastEducation",
    },
    {
      header: () => (
        <div className="text-right">
          <h1 className="mr-4">Action</h1>
        </div>
      ),
      id: "action",
      cell: ({ row }) => (
        <div className="flex gap-2 justify-end">
          <ModalEditEmployee employee={row.original} />
          <ModalCreateSlip slip={row.original.defaultSalary} />
        </div>
      ),
      meta: {
        className: "text-right",
        cellClassName: "text-right",
        headerClassName: "text-right",
      },
    },
  ];

  return <DataTable columns={columns} data={employees} renderTop={renderTop} />;
}

function renderTop(table: any) {
  return (
    <div className="mb-2 flex w-full">
      <Input
        className="border px-2 py-1 rounded w-full max-w-xs"
        placeholder="Filter by name..."
        onChange={(e) =>
          table.getColumn("name")?.setFilterValue(e.target.value)
        }
      />
    </div>
  );
}
