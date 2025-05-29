import { auth } from "@clerk/nextjs/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Settings, GraduationCap, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ApplicationsTab from "./components/tabs/applications-tab";
import { getProfileData } from "@/data-access/profile-data";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import FavoritesTab from "./components/tabs/favorites-tab";
import SettingsTab from "./components/tabs/settings-tab";
// import NotificationsTab from "./components/tabs/notifications-tab";

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) return redirect("/login");

  const user = await getProfileData(userId);
  console.log(userId);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full">
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
      <div className="bg-primary pt-12 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <Avatar className="w-24 h-24 border-4 border-white">
            <AvatarImage src={user.imageUrl ?? ""} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-white">{user.name}</h1>
            <p className="text-gray-300">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-lg shadow-md">
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="border-b border-gray-200">
              <TabsTrigger
                value="applications"
                className="flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Applications
              </TabsTrigger>
              <TabsTrigger
                value="favorites"
                className="flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Favorites
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="applications">
              <ApplicationsTab applications={user.admissions} />
            </TabsContent>
            <TabsContent value="favorites">
              <FavoritesTab favorites={user.favorites} />
            </TabsContent>
            <TabsContent value="settings">
              <SettingsTab />
            </TabsContent>
            {/* 
            <TabsContent value="notifications">
              <NotificationsTab />
            </TabsContent>
            */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
