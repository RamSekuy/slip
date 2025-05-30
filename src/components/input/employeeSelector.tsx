"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Employee } from "@/lib/generated/prisma";
import { Input } from "../ui/input";
import { DataTable } from "../ui/dataTable";
import useSP from "@/hooks/useSP";
import { ColumnDef } from "@tanstack/react-table";

function Popover({ open, onOpenChange, trigger, children }: any) {
  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <span onClick={() => onOpenChange(!open)}>{trigger}</span>
      {open && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "white",
            border: "1px solid #ddd",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginTop: 4,
            minWidth: 240,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function EmployeeSelector({ employees }: { employees: Employee[] }) {
  const { replace, sp } = useSP();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const selected = useMemo(() => {
    const id = sp.get("employee");
    return employees.findLast((e) => e.id == id);
  }, [sp]);

  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns: ColumnDef<Employee>[] = [
    {
      header: "Employee Name",
      accessorKey: "name",
      cell: ({ row }) => (
        <div
          style={{ cursor: "pointer", padding: 8 }}
          onClick={() => {
            replace({ key: "employee", value: row.original.id });
            setOpen(false);
          }}
        >
          {row.original.name}
        </div>
      ),
    },
  ];

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <button
          type="button"
          className="border px-3 py-2 rounded w-56 text-left bg-white"
        >
          {selected ? selected.name : "Select Employee"}
        </button>
      }
    >
      <div className="p-2">
        <Input
          ref={inputRef}
          placeholder="Search Employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{ maxHeight: 200, overflowY: "auto", marginTop: 8 }}>
          <DataTable data={filtered} columns={columns} />
        </div>
      </div>
    </Popover>
  );
}
