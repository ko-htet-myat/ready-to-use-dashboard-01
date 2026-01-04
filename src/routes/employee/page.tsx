import JsonView from "@/components/common/json-view";
import PageTitle from "@/components/common/page-title";
import { useTypedLoaderData } from "@/hooks/use-loader-data";

type EmployeeTypes = {
  employees: {
    id: number;
    name: string;
    role: string;
  }[];
};

export default function EmployeePage() {
  const { employees } = useTypedLoaderData<EmployeeTypes>();
  console.log(employees);
  return (
    <div>
      <PageTitle>Employee Page</PageTitle>
      <JsonView data={employees} />
    </div>
  );
}
