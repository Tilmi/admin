import { CardProfile } from "@/components/CardProfile";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium mb-2">Profile</h1>
      <div className="grid grid-cols-2">
        <CardProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
