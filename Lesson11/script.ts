type Person = {
  userID: number;
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
};

// const users: Person[] = [
//   {
//     userID: 1,
//     firstName: "Martyn",
//     lastName: "Lourenco",
//     age: 36,
//     sex: "male",
//   },
//   {
//     userID: 2,
//     firstName: "Jiaqian",
//     lastName: "Dai",
//     age: 27,
//     sex: "female",
//   },
// ];

const user1: Person = {
  userID: 1,
  firstName: "Martyn",
  lastName: "Lourenco",
  age: 36,
  sex: "male",
};
const user2: Person = {
  userID: 2,
  firstName: "Jiaqian",
  lastName: "Dai",
  age: 27,
  sex: "female",
};
const user3: Person = {
  userID: 3,
  firstName: "Kristján",
  lastName: "Jóhannsson",
  age: 36,
  sex: "female",
};
const user4: Person = {
  userID: 4,
  firstName: "Gunnar",
  lastName: "Guðlaugsson",
  age: 35,
  sex: "female",
};

const users: Person[] = [user1, user2, user3, user4];

// const alertAgeOfPerson = (person: Person) => {
//   window.alert(person.age);
// };

// type MakeIntroduction = (person: Person) => string;
// const makeIntroduction: MakeIntroduction = (person) => {
//   return `This is ${person.firstName} ${person.lastName} and ${
//     person.sex === "male" ? "he" : "she"
//   } is ${person.age} years old.`;
// };

const makeIntroduction = (person: Person): string => {
  return `This is ${person.firstName} ${person.lastName} and ${
    person.sex === "male" ? "he" : "she"
  } is ${person.age} years old.`;
};

// console.log(makeIntroduction(user1));
// console.log(makeIntroduction(user2));

const getPersonByUserID = (
  //   users: Person[],
  userID: number
): Person | undefined => {
  return users.find((user) => user.userID === userID);
};

const human = getPersonByUserID(2) ?? {
  userID: -1,
  firstName: "Unknown",
  lastName: "Unknown",
  age: 0,
  sex: "unspecified",
};
console.log(human);

// let userID: number;
// let firstName: string;
// let lastName: string;
// let sex: string;

// if (human) {
//   ({ userID, firstName, lastName, sex } = human);
// } else {
//   console.log("Person not found");
//   userID = -1;
//   firstName = "Unknown";
//   lastName = "Unknown";
//   sex = "unknown";
// }

const { userID, firstName, lastName, sex } = human;
console.log(firstName);
console.log(userID);

const doubleAgeOfPerson = (person: Person) => {
  const result = person.age * 2;
  console.log(result);
  return result;
};

type Organism = {
  alive: boolean;
};

type Animal = Organism & {
  hasCellWall: boolean;
};

type Mammal = Animal & {
  hasWarmBlood: boolean;
  legCount: number;
  liveBirth: boolean;
};

type Human = Mammal & {
  legCount: number;
  languageCapable: boolean;
};

type Reptile = Animal & {
  eyeCount: 2;
  warmBlooded: boolean;
};

type FlyingAnimal<T extends Animal> = T & {
  flying: true;
};

const bird: FlyingAnimal<Reptile> = {
  alive: true,
  hasCellWall: true,
  eyeCount: 2,
  warmBlooded: true,
  flying: true,
};
