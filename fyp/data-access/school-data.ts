import prisma from "@/lib/prisma";
// =================================================================================================

export async function getTopSchools() {
  try {
    // Step 1: Get schools with reviews, ordered by average rating
    const reviewedSchools = await prisma.review.groupBy({
      by: ["schoolId"],
      _avg: {
        rating: true,
      },
      orderBy: {
        _avg: {
          rating: "desc",
        },
      },
      take: 3,
    });

    const reviewedSchoolIds = reviewedSchools
      .map((r) => r.schoolId)
      .filter((id): id is string => id !== null);

    // Step 2: Fetch full School data for reviewed schools
    const reviewedSchoolData = await prisma.school.findMany({
      where: {
        id: { in: reviewedSchoolIds },
      },
    });

    // Step 3: If less than 3, fill in with unrated schools
    const needed = 3 - reviewedSchoolData.length;
    let unratedSchools: typeof reviewedSchoolData = [];

    if (needed > 0) {
      unratedSchools = await prisma.school.findMany({
        where: {
          id: { notIn: reviewedSchoolIds },
        },
        include: {
          reviews: true,
        },
        take: needed,
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return [...reviewedSchoolData, ...unratedSchools];
  } catch (error) {
    console.error("Failed to fetch top schools:", error);
    return [];
  }
}

// =================================================================================================

export async function getSchoolsData({ query }: { query?: string }) {
  try {
    const [schools, totalCount] = await Promise.all([
      prisma.school.findMany({
        where: query
          ? {
              OR: [
                {
                  name: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
                {
                  address: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : undefined, // No filter applied if query is empty
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.school.count({
        where: query
          ? {
              OR: [
                {
                  name: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
                {
                  address: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
              ],
            }
          : undefined, // No filter applied if query is empty
      }),
    ]);

    return { schools, totalCount };
  } catch (error) {
    console.error("Failed to fetch schools:", error);
    return { schools: [], totalCount: 0 };
  }
}

// =================================================================================================

export async function getSchoolDetailData(schoolId?: string, userId?: string) {
  if (!schoolId) return { school: null, ratingAvg: null, isFavorited: false };

  try {
    const [school, ratingAvg, favorite] = await prisma.$transaction([
      prisma.school.findUnique({
        where: { id: schoolId },
        include: { schoolBranch: true },
      }),
      prisma.review.aggregate({
        _avg: { rating: true },
        where: { schoolId },
      }),
      userId
        ? prisma.favorite.findUnique({
            where: { userId_schoolId: { userId, schoolId } },
          })
        : prisma.favorite
            .findUnique({
              where: { userId_schoolId: { userId: "", schoolId: "" } },
            })
            .catch(() => null), // This will always return a PrismaPromise
    ]);

    return {
      school,
      ratingAvg,
      isFavorited: userId ? !!favorite : false,
    };
  } catch (error) {
    console.error("Failed to fetch school details:", error);
    return { school: null, ratingAvg: null, isFavorited: false };
  }
}

// =================================================================================================

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
