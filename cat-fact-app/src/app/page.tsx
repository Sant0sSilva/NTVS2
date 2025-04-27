"use client";

import { useEffect, useState } from "react";

interface CatFact {
  fact: string;
  length: number;
}

interface Cat {
  id: string;
  url: string;
  height: number;
  width: number;
}

const sleep = async (timeMS: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeMS));
};

const isNodeError = (data: unknown): data is NodeJS.ErrnoException => {
  if (data && typeof data === "object" && "message" in data && "name" in data) {
    return true;
  }
  return false;
};

const Home = () => {
  const [catImages, setCatImages] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [catFact, setCatFact] = useState("");
  const [clickIndex, setClickIndex] = useState<number | null>(null);

  const getCatFactData = async () => {
    try {
      const catFacturl = "https://catfact.ninja/fact?max_length=50";
      const response = await fetch(catFacturl);
      if (response.status != 200) {
        throw new Error(`response: ${response.status}`);
      }
      const json = response.json();
      return json;
    } catch (error: any) {
      const nodeError: NodeJS.ErrnoException = error;
      return nodeError;
    }
  };

  const getCatFact = async () => {
    const catFactResponse: CatFact = await getCatFactData();
    if (isNodeError(catFactResponse)) {
      return;
    }
    setCatFact(catFactResponse.fact);
  };

  useEffect(() => {
    const getCatImageData = async () => {
      try {
        setIsLoading(true);
        const catImageURL =
          "https://api.thecatapi.com/v1/images/search?limit=8";
        const response = await fetch(catImageURL);
        if (response.status !== 200) {
          throw new Error(`${response.status}`);
        }
        const json: Cat[] = await response.json();
        return json;
      } catch (error: any) {
        const nodeError: NodeJS.ErrnoException = error;
        return nodeError;
      }
    };

    const getCatImage = async () => {
      const catImageResponse = await getCatImageData();
      if (isNodeError(catImageResponse)) {
        return;
      }
      // await sleep(500);
      setCatImages(catImageResponse);
      setIsLoading(false);
    };

    getCatImage();
  }, []);

  return (
    <div className="flex justify-center items-center rounded m-20">
      {isLoading ? (
        <div>
          <div>Loading...</div>
        </div>
      ) : (
        <div className="flex flex-col sm:grid grid-cols-3">
          {catImages.slice(0, 9).map((image, index) => (
            <div className=" w-[100px] h-[100px]  m-[8px] " key={image.id}>
              {clickIndex === index && (
                <div
                  onClick={() => {
                    setClickIndex(null);
                  }}
                  className="p-2 flex  absolute w-[100px] h-[100px]  bg-black opacity-50 text-xs hover:cursor-pointer"
                >
                  {!catFact ? (
                    <p>Loading...</p>
                  ) : (
                    <p className="break-words overflow-hidden italic">
                      {catFact}
                    </p>
                  )}
                </div>
              )}
              <img
                onClick={() => {
                  setCatFact("");
                  setClickIndex(index);
                  getCatFact();
                }}
                className=" object-cover w-[100%] h-[100%] rounded-[12px] hover:cursor-pointer"
                src={image.url}
                alt={`cat${index}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
// https://catfact.ninja/fact?max_length=20
// Get facts from https://catfact.ninja/#/Facts/getFacts

// Get images from https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
