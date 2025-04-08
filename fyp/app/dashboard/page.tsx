import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import SchoolDashboard from "./school/[schoolId]/page";
import UserDashboard from "./user/page";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log("From", user?.id);

  return (
    <div className="min-h-screen p-8">
      {user ? (
        <div className="max-w-4xl mx-auto">
          {/* User Profile Section */}
          <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center gap-6 justify-center">
              {user.image && (
                <Image
                  src={user.image}
                  alt={`${user.name}'s profile`}
                  className="rounded-full object-cover border-2 border-gray-200"
                  width={96}
                  height={96}
                />
              )}
              {user.role === "SCHOOL" && (
                <>
                  <SchoolDashboard schoolId={user?.id || ""} />
                </>
              )}
              {user.role === "GENERAL" && (
                <>
                  <UserDashboard />
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-8 bg-red-50 rounded-xl">
          <h2 className="text-xl font-semibold text-red-600">Access Denied</h2>
          <p className="text-gray-600">Please sign in to view this content</p>
        </div>
      )}
    </div>
  );
}
