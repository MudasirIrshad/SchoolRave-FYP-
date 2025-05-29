import { HeartOff, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Favorite, School } from "@/generated/prisma";

export default function FavoritesTab({
  favorites,
}: {
  favorites: (Favorite & { school: School })[];
}) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Favorites</h2>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-32 h-32 text-gray-400 mb-4 flex justify-center items-center">
            <HeartOff className="w-16 h-16" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            No favorite schools yet
          </h3>
          <p className="mt-2 text-gray-500">
            You haven&apos;t added any schools to your favorites.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((favorite) => {
            const school = favorite.school;
            return (
              <Link
                href={`/schools/${school.id}`}
                key={favorite.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative h-40 bg-gray-100">
                  {school.imageUrl ? (
                    <Image
                      src={school.imageUrl}
                      alt={school.name}
                      fill
                      className="object-cover"
                      sizes="100%"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {school.name}
                  </h3>
                  {school.address && (
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {school.address}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
