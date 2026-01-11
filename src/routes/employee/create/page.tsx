import { useGetUsersQuery } from "@/api/user-api";

export default function CreateEmployeePage() {
  const { data, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading ...</p>;
  console.log(data, "mock data");
  return <div>CreateEmployeePage</div>;
}
