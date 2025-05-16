const characters = [
  {
    id: 1,
    name: "Shrek",
    description: "A beautiful ugly ogre.",
    imgPath: "/images/shrek.png",
    imScale: "scale-100",
  },

  {
    id: 2,
    name: "Fiona",
    description: "A beautiful ogre princess.",
    imgPath: "/images/fiona.png",
    imScale: "scale-45",
  },
  {
    id: 3,
    name: "Donkey",
    description: "Shrek's loyal friend who never shuts up.",
    imgPath: "/images/donkey.png",
    imScale: "scale-50 border-",
  },
];

export type Character = (typeof characters)[number];

export const getAllCharacters = async (): Promise<Character[]> => {
  return characters;
};
const api = {
  getAllCharacters,
};

export default api;
