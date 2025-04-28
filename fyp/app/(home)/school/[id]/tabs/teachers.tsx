import { School } from "@/lib/zod-types/school";

export default function Teachers({ school }: { school: School }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Teaching Staff</h3>
      <div className="mb-6">
        <p className="mb-4">
          {school.name} employs highly qualified teachers who are dedicated to
          student success. With a student-teacher ratio of{" "}
          {school.studentTeacherRatio}, students receive personalized attention
          and support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Teacher Qualifications</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>87% hold advanced degrees</li>
              <li>Average 8+ years of teaching experience</li>
              <li>Regular professional development</li>
              <li>Subject matter experts in their fields</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Teaching Philosophy</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Student-centered approach</li>
              <li>Emphasis on critical thinking</li>
              <li>Integration of technology</li>
              <li>Collaborative learning environments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
