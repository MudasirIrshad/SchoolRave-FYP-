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
  });

  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500">No posts yet.</p>;
  }
  return (
    <div className="space-y-4 mt-4 w-full max-w-2xl mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 shadow-sm bg-white">
          <p className="mb-2 text-sm text-gray-800">{post.content}</p>
          {post.image && (
            <div className="relative w-full h-64 rounded overflow-hidden mb-2">
              <Image
                src={post.image}
                alt="Post image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <p className="text-xs text-gray-400">
            Posted on {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShowPosts;
