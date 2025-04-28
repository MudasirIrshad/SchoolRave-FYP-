import { School } from "@/lib/zod-types/school";

export default function SchoolProfile({ school }: { school: School }) {
  return (
    <div>
      <p className="text-gray-600 my-4">{school.description}</p>

      <h3 className="text-xl font-semibold mb-4">Facilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {school.facilities.map((facility, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-50 p-3 rounded-lg"
          >
            <div className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center mr-3">
              {index + 1}
            </div>
            <span className="font-medium">{facility}</span>
          </div>
        ))}
      </div>

      {/* <h3 className="text-xl font-semibold mb-4">School Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {school?.schoolHighlights.map((highlight, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{highlight.title}</h4>
            <p className="text-sm text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
