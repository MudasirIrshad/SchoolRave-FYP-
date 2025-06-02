import { MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School } from "@/generated/prisma";

export default function SchoolCard({ school }: { school: School }) {
  return (
    <Link
      href={`/school/${school.id}`}
      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
    >
      <Card className="hover:shadow-lg transition-all duration-200">
        <div className="relative h-48 w-full">
          <Image
            src={
              school.imageUrl || "https://placehold.co/600x400?text=No+Image"
            }
            alt={`Exterior of ${school.name}`}
            fill
            className="object-cover rounded-t-lg"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary">
              {school.school_type === "PRIVATE" ? "Private" : "Public"}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{school.name}</CardTitle>
          <CardDescription className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {school.address}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-primary">
              {school.medium_of_instruction}
            </Badge>
            <Badge variant="outline" className="text-primary">
              {school.curriculum_type}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {school.description || "No description available"}
          </p>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          View Details →
          <div className="flex items-center text-xs text-muted-foreground">
            <MessageSquare className="w-3 h-3 mr-1" />
            Contact: {school.phone}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
