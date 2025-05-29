import prisma from "@/lib/prisma";

export async function getSchoolsData(searchQuery: string | undefined) {
  try {
    return await prisma.school.findMany({
      where: {
        name: {
          contains: searchQuery,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch schools:", error);
    return [];
  }
}

export async function getSchoolDetailData(schoolId?: string) {
  if (!schoolId) return { school: null, ratingAvg: null };

  try {
    const [school, ratingAvg] = await prisma.$transaction([
      prisma.school.findUnique({
        where: { id: schoolId },
        include: { schoolBranch: true },
      }),
      prisma.review.aggregate({
        _avg: { rating: true },
        where: { schoolId },
      }),
    ]);

    return { school, ratingAvg };
  } catch (error) {
    console.error("Failed to fetch school details:", error);
    return { school: null, ratingAvg: null };
  }
}

export async function getSchoolBranchReviews(branchId: string | undefined) {
  if (!branchId) return [];

  try {
    return await prisma.review.findMany({
      where: {
        schoolBranchId: branchId,
      },
      include: {
        schoolBranch: true,
        reviewer: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch branch reviews:", error);
    return [];
  }
}
