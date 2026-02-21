"use client";

import { useEffect, useState } from "react";
import { Profile } from "@/types/profile";
import ProfileCard from "../components/ProfileCard";
import ProfileDetails from "../components/ProfileDetails";
import Link from "next/link";

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(() => setError("Failed to load profile"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <ProfileCard profile={profile} />
      <ProfileDetails profile={profile} />

      <Link
        href="/edit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Edit Profile
      </Link>
    </div>
  );
}