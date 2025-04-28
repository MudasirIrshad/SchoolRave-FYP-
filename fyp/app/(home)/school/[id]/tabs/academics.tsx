import { School } from "@/lib/zod-types/school";
// import { GraduationCap } from "lucide-react";

export default function Academics({ school }: { school: School }) {
  return (
    <div>
      {/* <h3 className="text-xl font-semibold mb-4">Academic Programs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {school.programs.map((program, index) => (
          <div key={index} className="flex items-start">
            <GraduationCap className="w-5 h-5 text-primary mt-1 mr-2" />
            <div>
              <h4 className="font-semibold">{program}</h4>
              <p className="text-sm text-gray-600">
                Comprehensive curriculum with expert instructors and hands-on
                learning opportunities.
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Academic Highlights</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Rigorous curriculum aligned with state standards</li>
          <li>Personalized learning plans for students</li>
          <li>Regular academic performance assessments</li>
          <li>Support services for struggling students</li>
          <li>Enrichment opportunities for advanced learners</li>
        </ul>
      </div>
    </div>
  );
}
