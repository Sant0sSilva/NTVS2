// import type { User } from "@/app/types/types";
const users = [
  {
    id: 1,
    name: "Gunnsteinn",
    role: "AI Whisperer",
    funFact:
      "Once built a chatbot that became self-aware, but it just wanted to be a barista.",
    motto: "If it compiles, ship it.",
  },
  {
    id: 2,
    name: "Darri",
    role: "Chief Bug Summoner",
    funFact:
      "Writes code that is so obscure, even future Darri won't understand it.",
    motto: "It's not a bug, it's an undocumented feature.",
  },
  {
    id: 3,
    name: "Harry",
    role: "Pixel Wrangler",
    funFact:
      "Can design an interface so smooth it slips through existential dread unnoticed.",
    motto:
      "Design like nobody's watching... because they're all doomscrolling.",
  },
  {
    id: 4,
    name: "John",
    role: "Backend Philosopher",
    funFact:
      "Optimized a database query so well it caused a minor temporal anomaly.",
    motto: "I index, therefore I am.",
  },
];
export type User = (typeof users)[number];

const sleep = async (durationInMs: number) => {
  const coinFlipPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("heads");
    }, durationInMs);
  });
  await coinFlipPromise;
  console.log("Done sleeping");
};

export const fakeGetUserFunction = async (
  id: number
): Promise<User | string> => {
  await sleep(1000);
  const user = users.find((user) => user.id === id);
  if (user) {
    return user;
  }
  return "No user";
};
export const fakeGetAllUserFunction = async (): Promise<User[]> => {
  await sleep(1000);
  return users;
};

const api = {
  sleep,
  fakeGetUserFunction,
  fakeGetAllUserFunction,
};

export default api;
