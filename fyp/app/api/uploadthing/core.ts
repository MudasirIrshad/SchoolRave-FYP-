import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";
// import { isTeacher } from "@/lib/teacher";
const f = createUploadthing();

const handleauth = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  return { userId };
};
console.log("THIS IS CORE TS");
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  schoolImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => await handleauth())
    .onUploadComplete(() => {}),
  schoolAttachment: f(["pdf"])
    .middleware(async () => await handleauth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
