"use client";

import { useEffect, useState } from "react";
import { Profile } from "@/types/profile";
import { useRouter } from "next/navigation";
import ProfileForm from "../components/ProfileForm";

export default function EditPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  const handleUpdate = async (
    data: Profile,
    setError: (msg: string) => void
  ) => {
    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) {
      setError(result.error);
      return;
    }

    router.push("/profile");
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <ProfileForm
      initialData={profile}
      onSubmit={handleUpdate}
    />
  );
}