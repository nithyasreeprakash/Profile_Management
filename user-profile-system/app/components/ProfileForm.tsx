"use client";

import { useState } from "react";
import { Profile } from "@/types/profile";

interface Props {
  initialData: Profile;
  onSubmit: (
    data: Profile,
    setError: (msg: string) => void
  ) => Promise<void>;
}

export default function ProfileForm({
  initialData,
  onSubmit
}: Props) {
  const [form, setForm] = useState<Profile>(initialData);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Name and Email required");
      return;
    }

    await onSubmit(form, setError);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      {error && <p className="text-red-500">{error}</p>}

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full" />
      <input name="bio" value={form.bio} onChange={handleChange} placeholder="Bio" className="border p-2 w-full" />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border p-2 w-full" />
      <input type="date" name="dob" value={form.dob} onChange={handleChange} className="border p-2 w-full" />

      <select name="gender" value={form.gender} onChange={handleChange} className="border p-2 w-full">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <select name="role" value={form.role} onChange={handleChange} className="border p-2 w-full">
        <option>Student</option>
        <option>Admin</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
}