"use client";

import Link from "next/link";
import { getAllCharacters } from "@/api/api";
import type { Character } from "@/api/api";
import { useCallback, useEffect, useState } from "react";

const Characters = () => {
  const [chars, setChars] = useState<Character[] | null>(null);

  const getCharacters = useCallback(async () => {
    const response = await getAllCharacters();

    setChars(response);
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  if (!chars) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="justify-self-center text-black text-2xl">
          Loading....
        </div>
        ;
      </div>
    );
  }

  return (
    <div className="w-screen h-screen text-black flex justify-center items-center">
      <div className="flex gap-4 w-4/5 h-4/5">
        {chars.map((char) => {
          return (
            <Link
              key={char.id}
              href={`/about/${char.name}`}
              className="block w-full"
            >
              <div
                key={char.id}
                className="bg-green-200 h-150 rounded-md hover:outline-2 hover:outline-green-600 hover:cursor-pointer flex flex-col items-center p-6 justify-between"
              >
                <div className="">
                  <p className="text-4xl"> {char.name} </p>
                  <p className="text-xl"> {char.description} </p>
                </div>
                <div>
                  <img
                    src={char.imgPath}
                    alt={char.name}
                    className={` h-100`}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
