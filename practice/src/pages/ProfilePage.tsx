import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const params = useParams<{ profileId: string }>();

  return <div>ProfilePage {params.profileId}</div>;
}

export default ProfilePage;
