import React from "react";
import ProfileComponent from "./profile";
import prisma from "@/lib/prisma";
import { School } from "@/generated/prisma";

interface MainPageProps {
  school: School;
}
async function MainPage({ school }: MainPageProps) {
  return (
    <div className="flex flex-col-reverse p-4 md:flex-row h-screen">
      <div className="flex-1 flex">abc</div>

      {/* 2ND HALF OF PAGE JUST FOR PROFILE COMPONENT */}
      <div className="flex-1 flex  justify-center">
        <ProfileComponent school={school} />
      </div>
    </div>
  );
}

export default MainPage;
