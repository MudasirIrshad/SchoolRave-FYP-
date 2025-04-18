import LoadingSpinner from "@/components/loading-spinner";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (user.unsafeMetadata?.role === "SCHOOL")
    return redirect(`/dashboard/school/${user.id}/schoolHome`);
  <div>
    <LoadingSpinner />
  </div>;

  if (user.unsafeMetadata?.role === "USER")
    return redirect(`/dashboard/user/${user.id}`);
}
