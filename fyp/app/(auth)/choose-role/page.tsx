import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ChooseRoleForm from "./component/choose-role-form";

export default async function ChooseRolePage() {
  const user = await currentUser();

  // If user is not logged in, redirect to sign-in
  if (!user) {
    redirect("/sign-in");
  }

  if (user.publicMetadata.role) {
    redirect("/");
  }
  return <ChooseRoleForm />;
}
