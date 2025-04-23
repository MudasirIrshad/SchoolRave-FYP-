// Static image references for school imagery
// These are placeholders that would typically be served from a CDN or image service

export type SchoolImageType =
  | "school-exterior-1"
  | "school-exterior-2"
  | "school-exterior-3"
  | "school-exterior-4"
  | "school-exterior-5"
  | "school-exterior-6"
  | "school-classroom-1"
  | "school-classroom-2"
  | "school-classroom-3"
  | "school-classroom-4"
  | "school-facility-1"
  | "school-facility-2"
  | "school-facility-3"
  | "school-facility-4"
  | "school-facility-5"
  | "school-facility-6"
  | "school-students-1"
  | "school-students-2"
  | "school-students-3"
  | "school-students-4";

interface ImageMap {
  [key: string]: string;
}

// School exterior images
const schoolExteriors: ImageMap = {
  "school-exterior-1":
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-exterior-2":
    "https://images.unsplash.com/photo-1494948141550-221698c089c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-exterior-3":
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-exterior-4":
    "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-exterior-5":
    "https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-exterior-6":
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
};

// School classroom images
const schoolClassrooms: ImageMap = {
  "school-classroom-1":
    "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-classroom-2":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-classroom-3":
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-classroom-4":
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
};

// School facility images
const schoolFacilities: ImageMap = {
  "school-facility-1":
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-facility-2":
    "https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-facility-3":
    "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-facility-4":
    "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-facility-5":
    "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-facility-6":
    "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
};

// Student diversity images
const schoolStudents: ImageMap = {
  "school-students-1":
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-students-2":
    "https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-students-3":
    "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "school-students-4":
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
};

// Combined image map
const imageMap: ImageMap = {
  ...schoolExteriors,
  ...schoolClassrooms,
  ...schoolFacilities,
  ...schoolStudents,
};

export function getImageUrl(image: SchoolImageType): string {
  return imageMap[image] || "";
}

// Additional random images for gallery display
export function getRandomSchoolImages(count: number = 3): string[] {
  const images = [
    ...Object.values(schoolExteriors),
    ...Object.values(schoolClassrooms),
    ...Object.values(schoolFacilities),
    ...Object.values(schoolStudents),
  ];

  // Shuffle and return subset
  return images.sort(() => 0.5 - Math.random()).slice(0, count);
}

// Get a list of popular cities for search suggestions
export const popularCities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
];
