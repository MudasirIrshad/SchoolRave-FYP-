import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="min-h-screen p-8">
      {user ? (
        <div className="max-w-4xl mx-auto">
          {/* User Profile Section */}
          <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center gap-6">
              {user.imageUrl && (
                <Image
                  src={user.imageUrl}
                  alt={`${user.firstName}'s profile`}
                  className="rounded-full object-cover border-2 border-gray-200"
                  width={96}
                  height={96}
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-gray-600">
                  {user.emailAddresses[0].emailAddress}
                </p>
                {user.username && (
                  <p className="text-sm text-gray-500">@{user.username}</p>
                )}
              </div>
            </div>

            {/* Additional User Details */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Account Created</p>
                <p className="font-medium">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="font-medium">
                  {new Date(user.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Hero Section */}
            <div className="mb-8 p-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl shadow-lg">
              <h2 className="text-3xl font-extrabold mb-4">
                Discover the Best Alternatives and Honest Reviews
              </h2>
              <p className="text-lg mb-6">
                Find reliable reviews and explore top alternatives for software
                and services. Make informed decisions with our community-driven
                platform.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition-colors">
                  Explore Reviews
                </button>
                <button className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition-colors">
                  Add Your Review
                </button>
              </div>
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
