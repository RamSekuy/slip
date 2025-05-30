"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SalarySlipTable from "../table/salarySlipTable";
import { SalarySlipExtend } from "@/type/prismaExtend";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function ModalCreateSlip({ slip }: { slip: SalarySlipExtend }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Create Slip</Button>
      </DialogTrigger>
      <DialogContent className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-[#eaeaea] border-black border-2 p-4 shadow-lg shadow-black/50">
        <DialogTitle className="text-center text-2xl font-semibold">
          Create Slip
        </DialogTitle>
        <Card>
          <CardContent className="max-h-[50dvh] overflow-y-auto space-y-2">
            <SalarySlipTable salarySlip={slip} type="create report" />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
