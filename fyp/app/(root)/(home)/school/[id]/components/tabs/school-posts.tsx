import React from "react";
import prisma from "@/lib/prisma";
import Image from "next/image";

interface ShowPostsProps {
  schoolId: string;
}

async function ShowPosts({ schoolId }: ShowPostsProps) {
  const posts = await prisma.post.findMany({
    where: { schoolId },
    orderBy: { createdAt: "desc" },
    include: {
      school: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No posts</h3>
          <p className="mt-1 text-sm text-gray-500">
            This school hasn&apos;t posted anything yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-4 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center mb-3">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                {post.school.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {post.school.name}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(post.createdAt).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          {post.content && (
            <p className="mb-3 text-sm text-gray-800 whitespace-pre-line">
              {post.content}
            </p>
          )}

          {post.image && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3 border border-gray-200">
              <Image
                src={post.image}
                alt="Post image"
                layout="fill"
                objectFit="cover"
                className="hover:opacity-90 transition-opacity"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ShowPosts;
