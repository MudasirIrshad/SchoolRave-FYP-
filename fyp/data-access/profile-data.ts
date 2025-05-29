import prisma from "@/lib/prisma";

export async function getProfileData(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        admissions: true,
        reviews: true,
        favorites: {
          include: {
            school: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    return null;
  }
}
