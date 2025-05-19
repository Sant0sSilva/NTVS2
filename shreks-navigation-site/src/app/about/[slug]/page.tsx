"use client";

import { useCallback, useEffect, useState } from "react";
import { getCharacterByID, type Character } from "@/api/api";

type AboutProps = {
  params: Promise<{ slug: string }>;
};

const About = ({ params }: AboutProps) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getCharacter = useCallback(async () => {
    const { slug } = await params;
    const response = await getCharacterByID(slug);
    if (typeof response === "string") {
      setError(response);
    } else {
      setCharacter(response);
    }
  }, [params]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  if (!character) {
    return (
      <div className="flex justify-center items-center h-screen w-screen text-black text-2xl">
        <p> {error} </p>
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen text-black justify-center items-center">
      <div className="flex w-1/2 bg-green-200 gap-5 p-3 rounded-md">
        <div className="flex  w-1/2">
          <img src={character.imgPath} alt="" />
        </div>
        <div className=" flex flex-col  w-1/2 gap-2 p-2">
          <p>{character?.name[0].toUpperCase() + character?.name.slice(1)}</p>
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  );
};
export default About;
/*
  

  const GetCharacter = useCallback(async () => {
    const response = await getCharacterByID();
    console.log(response);
    setCharacter(response);
  }, []);

  useEffect(() => {
    GetCharacter();
  }, [GetCharacter]);

 */
