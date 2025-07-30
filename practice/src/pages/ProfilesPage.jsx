import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 bg-amber-300 mb-3 w-[50%]">
        {profiles.map((profile) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-yellow-700" : "")}
            key={profile}
            to={`/profiles/${profile}`}
          >{`Item ${profile}`}</NavLink>
        ))}
      </div>
      <div className="bg-blue-400 w-[50%]">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfilesPage;
