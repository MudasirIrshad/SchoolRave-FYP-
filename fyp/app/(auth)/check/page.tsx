import LoadingSpinner from "@/components/loading-spinner";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CheckPage() {
  const user = await currentUser();
  const role = user?.publicMetadata.role;

  if (!user) {
    redirect("/sign-in");
  }

  if (!role) return redirect("/choose-role");

  if (role === "SCHOOL")
    return redirect(`/dashboard/school/${user.id}/schoolHome`);

  if (role === "GENERAL") return redirect(`/`);

  if (role === "ADMIN") return redirect(`/dashboard/admin/${user.id}`);

  return <LoadingSpinner />;
}
