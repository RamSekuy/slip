import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeTable from "../table/employeeTable";
import SalarySlipTable from "../table/salarySlipTable";
import { EmployeeExtend } from "@/type/prismaExtend";

export default function ModalEditEmployee({
  employee,
}: {
  employee: EmployeeExtend;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-[#eaeaea] border-black border-2 p-4 shadow-lg shadow-black/50">
        <DialogHeader>
          <DialogTitle className="mb-4">Edit</DialogTitle>
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Employee Data</TabsTrigger>
              <TabsTrigger value="slip">Default Salary Slip</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Employee Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <EmployeeTable type="update data" employee={employee} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="slip">
              <Card>
                <CardContent className="max-h-[50dvh] overflow-y-auto space-y-2">
                  <SalarySlipTable
                    salarySlip={employee.defaultSalary}
                    type="update slip"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
