"use client";
import { useState } from "react";
import { EmployeeExtend } from "@/type/prismaExtend";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addEmployee, updateEmployee } from "@/action/employee";
import Selector from "../input/Selector";
import actionToast from "@/components/actionToast";
import { roles, education } from "@/type/enum";
import { Employee } from "@/lib/generated/prisma";

type Props = {
  employee?: Employee | Partial<Employee>;
  type?: "add employee" | "update data" | "look";
};

const defaultEmployee: Employee = {
  id: "",
  name: "",
  phoneNumber: "",
  niy: "",
  role: "Admin",
  lastEducation: "",
  defaultSalaryId: "",
  updatedAt: new Date(),
  createdAt: new Date(),
};

export default function EmployeeTable({ employee = {}, type = "look" }: Props) {
  const [form, setForm] = useState<Employee>({
    ...defaultEmployee,
    ...employee,
  });

  const handleCancel = () => setForm({ ...defaultEmployee, ...employee });

  const handleChange = (key: keyof EmployeeExtend, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold pr-4">Nama</TableCell>
            <TableCell>
              {type === "look" ? (
                form.name
              ) : (
                <Input
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold pr-4">PhoneNumber</TableCell>
            <TableCell>
              {type === "look" ? (
                form.phoneNumber
              ) : (
                <Input
                  value={form.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                />
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold pr-4">Role</TableCell>
            {type === "look" ? (
              <TableCell>{form.role}</TableCell>
            ) : (
              <TableCell>
                <Selector
                  options={roles}
                  value={form.role}
                  onChange={(e) => handleChange("role", e)}
                />
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            <TableCell className="font-bold pr-4">Education</TableCell>
            <TableCell>
              {type === "look" ? (
                <TableCell>{form.lastEducation}</TableCell>
              ) : (
                <TableCell>
                  <Selector
                    options={education}
                    value={form.lastEducation}
                    onChange={(e) => handleChange("lastEducation", e)}
                  />
                </TableCell>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {type !== "look" && (
        <div className="flex gap-2 mt-4 w-full justify-end">
          <Button variant="outline" onClick={handleCancel}>
            Reset
          </Button>
          {type === "update data" && (
            <Button onClick={() => actionToast(updateEmployee(form.id, form))}>
              Update
            </Button>
          )}
          {type === "add employee" && (
            <Button
              onClick={async () => {
                (await actionToast(addEmployee(form))) ? handleCancel() : false;
              }}
            >
              Add Employee
            </Button>
          )}
        </div>
      )}
    </>
  );
}
