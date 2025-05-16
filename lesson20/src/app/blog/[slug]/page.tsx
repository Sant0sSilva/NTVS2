"use client";

import { fakeGetUserFunction } from "@/api/api";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { User } from "@/api/api";
// type ParamType = {
//   slug: string;
// };

type Props = {
  params: Promise<{ slug: string }>;
};

const BlogWithInfo = ({ params }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getSlug = useCallback(async () => {
    const { slug } = await params;
    const response = await fakeGetUserFunction(Number(slug));
    if (typeof response === "string") {
      setError(response);
    } else setUser(response);
  }, [params]);

  useEffect(() => {
    getSlug();
  }, [getSlug]);

  if (error) {
    return <p> {error} </p>;
  }

  if (user === null) {
    return <div className="m-20">Loading...</div>;
  }
  return (
    <div className="p-20 flex flex-col gap-2">
      <p className="bg-green-600">{user.name}</p>
      <div className="bg-green-900">
        <p>{user.role}</p>
        <p>{user.funFact}</p>
        <p>{user.motto}</p>
      </div>
      <Link
        href={"/blog"}
        className="bg-green-950 rounded-2xl w-[110px] justify-center px-2 hover:bg-green-800"
      >
        Back to blog
      </Link>
    </div>
  );
};

export default BlogWithInfo;
