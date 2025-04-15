import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

export default function UserDashboard({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  return (
    <div>
      UserDashboard
      <span>{userId}</span>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
