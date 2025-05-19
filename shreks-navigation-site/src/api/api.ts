const characters = [
  {
    id: 1,
    name: "shrek",
    description: "A beautiful ugly ogre.",
    imgPath: "/images/shrek.png",
  },

  {
    id: 2,
    name: "fiona",
    description: "A beautiful ogre princess.",
    imgPath: "/images/fiona.png",
  },
  {
    id: 3,
    name: "donkey",
    description: "Shrek's loyal friend who never shuts up.",
    imgPath: "/images/donkey.png",
  },
];

export type Character = (typeof characters)[number];

export const getCharacterByID = async (
  name: string
): Promise<Character[] | string> => {
  const char = characters.find((char) => char.name === name);
  if (char) {
    return char;
  }
  return "Character doesn't exist";
};

export const getAllCharacters = async (): Promise<Character[]> => {
  return characters;
};
const api = {
  getAllCharacters,
  getCharacterByID,
};

export default api;
