import { auth } from "@clerk/nextjs/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Settings, GraduationCap, Bell } from "lucide-react";
import ApplicationsTab from "./components/tabs/applications-tab";
import { getProfileData } from "@/data-access/profile-data";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import FavoritesTab from "./components/tabs/favorites-tab";
import SettingsTab from "./components/tabs/settings-tab";
import ProfileImageUpload from "./components/ProfileImageUpload";
export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) return redirect("/login");

  const user = await getProfileData(userId);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full">
          <Alert variant="destructive">
            <AlertTitle>Profile Not Found</AlertTitle>
            <AlertDescription>
              We couldn&apos;t find your profile information. Please contact
              support.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Profile Header */}
      <div className="bg-primary pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <ProfileImageUpload
            userId={userId}
            currentImageUrl={user.imageUrl}
            userName={user.name}
            className="w-20 h-20 md:w-24 md:h-24 border-4 border-white"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {user.name}
            </h1>
            <p className="text-gray-300 text-sm md:text-base">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 md:-mt-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="border-b border-gray-200 flex overflow-x-auto">
              <TabsTrigger
                value="applications"
                className="flex items-center gap-2 px-4 py-3 text-sm md:text-base"
              >
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                <span className="whitespace-nowrap">Applications</span>
              </TabsTrigger>
              <TabsTrigger
                value="favorites"
                className="flex items-center gap-2 px-4 py-3 text-sm md:text-base"
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
                <span className="whitespace-nowrap">Favorites</span>
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2 px-4 py-3 text-sm md:text-base"
              >
                <Bell className="w-4 h-4 md:w-5 md:h-5" />
                <span className="whitespace-nowrap">Notifications</span>
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="flex items-center gap-2 px-4 py-3 text-sm md:text-base"
              >
                <Settings className="w-4 h-4 md:w-5 md:h-5" />
                <span className="whitespace-nowrap">Settings</span>
              </TabsTrigger>
            </TabsList>

            <div className="p-4 md:p-6">
              <TabsContent value="applications">
                <ApplicationsTab applications={user.admissions} />
              </TabsContent>
              <TabsContent value="favorites">
                <FavoritesTab favorites={user.favorites} />
              </TabsContent>
              <TabsContent value="settings">
                <SettingsTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
