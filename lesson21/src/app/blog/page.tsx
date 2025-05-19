"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { User } from "@/api/api";
import { fakeGetAllUserFunction } from "@/api/api";
import { useCallback } from "react";

const Blog = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  const getUsers = useCallback(async () => {
    const response = await fakeGetAllUserFunction();

    setUsers(response);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (!users) {
    return <div className="p-20">Loading...</div>;
  }

  return (
    <div className="p-20">
      <h1>Welcome to my Blog</h1>
      {/* <Link className="border border-red-500" href={"/blog/asdf"}>
        Go to missing blog
      </Link>
      <Link className="border border-red-500" href={"/blog/1"}>
        Go to existing blog
      </Link> */}
      {users?.map((user) => {
        return (
          <div
            key={user.id}
            className="border border-green-900 flex flex-col gap-1 my-2 rounded-md p-2"
          >
            <p>{user.name}</p>
            <p>{user.role}</p>
            <p>{user.funFact}</p>
            <Link
              href={`/blog/${user.id}`}
              className="bg-green-700 w-[150px] px-2 rounded-2xl hover:bg-green-600"
            >
              Go to user profile
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
