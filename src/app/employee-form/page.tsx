import EmployeeTable from "@/components/table/employeeTable";

export default function Page() {
  return (
    <main className="p-4">
      <EmployeeTable type="add employee" />;
    </main>
  );
}
