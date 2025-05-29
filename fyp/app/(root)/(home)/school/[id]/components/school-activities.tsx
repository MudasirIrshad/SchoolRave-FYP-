import { School } from "@/generated/prisma";
import { Award, Users } from "lucide-react";

export default function SchoolActivities({ school }: { school: School }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Clubs & Activities</h3>
      <p className="mb-4">
        {school.name} offers a wide range of extracurricular activities to help
        students develop their interests and talents outside the classroom.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <Award className="w-5 h-5 text-primary mr-2" />
            Athletics
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Basketball</li>
            <li>Soccer</li>
            <li>Track & Field</li>
            <li>Swimming</li>
            <li>Tennis</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <Users className="w-5 h-5 text-primary mr-2" />
            Clubs
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Debate Team</li>
            <li>Robotics Club</li>
            <li>Student Government</li>
            <li>Yearbook</li>
            <li>Chess Club</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center">
            <Award className="w-5 h-5 text-primary mr-2" />
            Arts
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Band</li>
            <li>Choir</li>
            <li>Drama Club</li>
            <li>Visual Arts</li>
            <li>Dance</li>
          </ul>
        </div>
      </div>

      <h4 className="font-semibold mb-2">Facilities</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {school.facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-blue-50 p-3 rounded-lg text-center text-sm font-medium text-primary"
          >
            {facility}
          </div>
        ))}
      </div>
    </div>
  );
}
