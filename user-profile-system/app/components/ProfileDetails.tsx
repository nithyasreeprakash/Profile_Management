import { Profile } from "@/types/profile";

interface Props {
  profile: Profile;
}

export default function ProfileDetails({ profile }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">
        Profile Details
      </h3>

      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Date of Birth:</strong> {profile.dob}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>

      <div className="mt-4">
        <strong>Social Links:</strong>
        <div>
          <a
            href={profile.social.linkedin}
            className="text-blue-600 block"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            className="text-gray-800 block"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}