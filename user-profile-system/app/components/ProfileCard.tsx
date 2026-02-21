import { Profile } from "@/types/profile";

interface Props {
  profile: Profile;
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <img
        src={profile.photo}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold">{profile.name}</h2>
      <p className="text-gray-600">{profile.role}</p>
      <p className="mt-2">{profile.bio}</p>
      <p className="mt-2">{profile.email}</p>
      <p>{profile.phone}</p>
    </div>
  );
}