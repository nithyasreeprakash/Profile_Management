import { NextRequest, NextResponse } from "next/server";
import { Profile } from "@/types/profile";

let profile: Profile = {
  photo: "https://i.pravatar.cc/150?img=3",
  name: "John Doe",
  email: "john@example.com",
  phone: "9876543210",
  bio: "Computer Science Student passionate about web development.",
  role: "Student",
  address: "Chennai, India",
  dob: "2002-05-15",
  gender: "Male",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
};

export async function GET() {
  return NextResponse.json(profile);
}

export async function PUT(req: NextRequest) {
  const data: Profile = await req.json();

  if (!data.name || !data.email) {
    return NextResponse.json(
      { error: "Name and Email are required" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    return NextResponse.json(
      { error: "Invalid Email Format" },
      { status: 400 }
    );
  }

  profile = data;

  return NextResponse.json({ message: "Profile updated successfully" });
}