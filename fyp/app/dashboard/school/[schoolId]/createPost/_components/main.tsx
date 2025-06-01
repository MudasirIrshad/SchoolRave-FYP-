import React from "react";
import ProfileComponent from "./profile";
import { School } from "@/generated/prisma";
import CreatePost from "./createPost";
import ShowPosts from "./showPosts";

interface MainPageProps {
  school: School;
}

async function MainPage({ school }: MainPageProps) {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen p-4 gap-6">
      {/* Left/main column: CreatePost + ShowPosts */}
      <div className="w-full md:flex-1 flex flex-col items-center gap-4">
        <CreatePost school={school} />
        <ShowPosts schoolId={school.id} /> {/* Show posts here */}
      </div>

      {/* Right column: Profile (only visible on medium+ screens) */}
      <div className="hidden md:flex md:flex-1 md:justify-center md:items-start">
        <ProfileComponent school={school} />
      </div>
    </div>
  );
}

export default MainPage;
