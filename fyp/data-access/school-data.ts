import { CurriculumType, Prisma, SchoolType } from "@/generated/prisma";
import prisma from "@/lib/prisma";
// =================================================================================================

export async function getTopSchools() {
  try {
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

    const reviewedSchoolData = await prisma.school.findMany({
      where: {
        id: { in: reviewedSchoolIds },
      },
    });

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
    const err = error as Error;
    console.error("❌ getTopSchools failed:", err.message);
    console.error(err.stack);
    return [];
  }
}

// =================================================================================================

export async function getSchoolsData({
  query,
  city,
  schoolType,
  curriculumType,
}: {
  query?: string;
  city?: string;
  schoolType?: SchoolType;
  curriculumType?: CurriculumType;
}) {
  try {
    // Build the where clause dynamically
    const whereClause: Prisma.SchoolWhereInput = {};

    // Text search in name and address
    if (query) {
      whereClause.OR = [
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
      ];
    }

    // Filter by school type
    if (schoolType) {
      whereClause.school_type = schoolType;
    }

    // Filter by curriculum type
    if (curriculumType) {
      whereClause.curriculum_type = curriculumType;
    }

    // Filter by city (through school branches)
    if (city) {
      whereClause.schoolBranch = {
        some: {
          city: {
            contains: city,
            mode: "insensitive",
          },
        },
      };
    }

    const [schools, totalCount] = await Promise.all([
      prisma.school.findMany({
        where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
        include: {
          schoolBranch: true,
          reviews: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.school.count({
        where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
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
    if (userId) {
      const [school, ratingAvg, favorite] = await prisma.$transaction([
        prisma.school.findUnique({
          where: { id: schoolId },
          include: { schoolBranch: true },
        }),
        prisma.review.aggregate({
          _avg: { rating: true },
          where: { schoolId },
        }),
        prisma.favorite.findUnique({
          where: { userId_schoolId: { userId, schoolId } },
        }),
      ]);

      return {
        school,
        ratingAvg,
        isFavorited: !!favorite,
      };
    } else {
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

      return {
        school,
        ratingAvg,
        isFavorited: false,
      };
    }
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
