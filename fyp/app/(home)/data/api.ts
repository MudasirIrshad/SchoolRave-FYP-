export async function getFeaturedSchools() {
  return [
    {
      name: "Northwood High School",
      type: "Public",
      address: "456 Elm Street",
      city: "Maplewood",
      state: "NJ",
      zipCode: "07040",
      description:
        "A highly-rated public high school known for its strong academics and diverse extracurricular activities.",
      gradeRange: "9-12",
      studentCount: 1550,
      rating: 4.7,
      imageUrl:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      studentTeacherRatio: "14:1",
      tags: ["Academics", "Sports", "Arts", "Technology"],
      programs: ["AP Courses", "Debate Club", "Robotics", "Drama"],
      facilities: [
        "Library",
        "Gymnasium",
        "Science Labs",
        "Auditorium",
        "Sports Fields",
      ],
      collegePlacement: 0.85,
      isTopRated: true,
      isFeatured: true,
    },
    {
      name: "Riverdale Country Day School",
      type: "Private",
      address: "123 Main Street",
      city: "Riverdale",
      state: "NY",
      zipCode: "10471",
      description:
        "An independent private school committed to providing a challenging and nurturing educational environment.",
      gradeRange: "K-12",
      studentCount: 800,
      rating: 4.9,
      imageUrl:
        "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      studentTeacherRatio: "10:1",
      tags: ["Academics", "Arts", "Music", "Small Class Sizes"],
      programs: [
        "IB Program",
        "Music Conservatory",
        "Visual Arts",
        "Community Service",
      ],
      facilities: [
        "Library",
        "Gymnasium",
        "Art Studios",
        "Music Rooms",
        "Theater",
      ],
      collegePlacement: 0.95,
      isTopRated: true,
      isFeatured: false,
    },
    {
      name: "Tech High Charter School",
      type: "Charter",
      address: "789 Innovation Drive",
      city: "Techville",
      state: "CA",
      zipCode: "90210",
      description:
        "A charter school focused on science, technology, engineering, and mathematics (STEM) education.",
      gradeRange: "6-12",
      studentCount: 650,
      rating: 4.5,
      imageUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      studentTeacherRatio: "16:1",
      tags: ["STEM", "Technology", "Engineering", "Math"],
      programs: [
        "Coding Club",
        "Robotics Competitions",
        "Science Olympiad",
        "AP Science",
      ],
      facilities: [
        "Science Labs",
        "Computer Labs",
        "Makerspace",
        "Library",
        "Gymnasium",
      ],
      collegePlacement: 0.78,
      isTopRated: false,
      isFeatured: true,
    },
  ];
}

// export async function getTopRatedSchools(): Promise {
//   const res = await fetch(
//     `${process.env.BASE_URL}/api/schools/top-rated/list`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );
//   return res.json();
// }
