"use client";

import { useRef, useState } from "react";

const coinFlipPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const wasHeads = Math.random() > 0.5;
    console.log(wasHeads);
    if (wasHeads) {
      resolve("heads");
    } else {
      reject("tails");
    }
  }, 1000);
});

const sleep = async (durationInMS: number) => {
  const coinFlipPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Heads");
    }, durationInMS);
  });
  await coinFlipPromise;
};

const flipACoin = async () => {
  try {
    const coinFlipResult = await coinFlipPromise;
    console.log(coinFlipResult);
  } catch (e) {
    console.log("eee", e);
  }
};

const chainPRomises = async () => {
  console.log("...Request received");
  sleep(3000)
    .then(async () => {
      console.log("First sleep awaited");
      await sleep(3000);
      console.log("Second sleep awaited");
    })
    .then(async () => {
      await sleep(3000);
      console.log("DATA RECEIVED");
      //   await getData();
    })
    .then(async () => {
      sleep(3000);
      console.log("Third sleep awaited");
    });

  const allPromises = async () => {
    const promise1 = await sleep(3000);
    const promise2 = await sleep(3000);
    const promise3 = await sleep(3000);
    // const promise4 = await getData();
    const foo = promise.all([promise1, promise2, promise3]);
  };

  const timeoutpromise = async () => {
    // Promise.race([getData(), sleep(3000)]); //could use something else to display message instead of sleep()
  };
};
//   await sleep(3000);
//   console.log("First sleep awaited");
//   await sleep(3000);
//   console.log("Second sleep  awaited");
//   await getData();
//   console.log("Got DATA");
//   await sleep(3000);
//   console.log("Third sleep  awaited");

type Drink = {
  idDrink: string;
  strDrink: string;
};

const isNodeError = (data: unknown): data is NodeJS.ErrnoException => {
  if (data && typeof data === "object" && "message" in data && "name in data") {
    return true;
  }
  return false;
};
const isDrinkResponse = (data: unknown): data is { drinks: Drink[] } => {
  if (
    data &&
    typeof data === "object" &&
    "drinks" in data &&
    Array.isArray(data.drinks) &&
    data.drinks.length > 0 &&
    typeof data.drinks[0] === "object" &&
    "idDrink" in data.drinks[0] &&
    "strDrink" in data.drinks[0]
  ) {
    return true;
  }
  return false;
};

const Home = () => {
  const [validationError, setValidationError] = useState<string>("");
  const inputValueRef = useRef("");
  const [drink, setDrink] = useState("");

  const submitInfo = async () => {
    try {
      if (inputValueRef.current.length < 10) {
        throw new Error("Input length too short!");
      }
    } catch (error) {
      setValidationError(error.message);
    }
  };

  const getData = async () => {
    const url =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito";
    try {
      const response = await fetch(url);
      console.log("STATUS:", response.status);
      if (response.status !== 200) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json: { drinks: Drink[] } = await response.json();
      console.log(json);
      return json;
    } catch (error: any) {
      const nodeError: NodeJS.ErrnoException = error;
      return nodeError;
    }
  };

  const getDrink = async () => {
    const drinkResponse = await getData();
    if (isDrinkResponse(drinkResponse)) {
      if (drinkResponse.drinks.length > 0) {
        setDrink(drinkResponse.drinks[0].strDrink);
      }
    }
  };

  return (
    <div className="p-20">
      {/* <p>hello world</p>
      <input
        className="border-2 border-blue-950"
        onChange={(e) => {
          setValidationError("");
          inputValueRef.current = e.target.value;
        }}
      />
      <button
        className="p-5"
        type="button"
        onClick={() => {
          submitInfo();
        }}
      >
        Click!
      </button>
      {validationError && <p className="text-red-500"> {validationError} </p>}
      <button type="button" onClick={flipACoin}>
        Flip a coin!
      </button>
      <button
        className="p-5"
        type="button"
        onClick={async () => {
          await sleep(3000);
          console.log("Done waiting");
        }}
      >
        Wait for 3 seconds and then log
      </button>
      <button
        className="p-5"
        type="button"
        onClick={async () => {
          await chainPRomises();
        }}
      >
        Chain promises
      </button> */}
      <button
        // className="p-5"
        type="button"
        onClick={async () => {
          await getDrink();
        }}
      >
        Display Drink
      </button>
      <p>{drink}</p>
    </div>
  );
};

export default Home;

const expectedResult = [
  {
    drinks: [
      {
        idDrink: "11000",
        strDrink: "Mojito",
        strDrinkAlternate: null,
        strTags:
          "IBA,ContemporaryClassic,Alcoholic,USA,Asia,Vegan,Citrus,Brunch,Hangover,Mild",
        strVideo: null,
        strCategory: "Cocktail",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions:
          "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
        strInstructionsES:
          "Mezcle las hojas de menta con el azúcar y el zumo de lima. Añada un chorrito de soda y llene el vaso con hielo picado. Verter el ron y completar con soda. Decorar y servir con pajita.",
        strInstructionsDE:
          "Minzblätter mit Zucker und Limettensaft verrühren. Füge einen Spritzer Sodawasser hinzu und fülle das Glas mit gebrochenem Eis. Den Rum eingießen und mit Sodawasser übergießen. Garnieren und mit einem Strohhalm servieren.",
        strInstructionsFR:
          "Mélanger les feuilles de menthe avec le sucre et le jus de citron vert. Ajoutez un filet d'eau gazeuse et remplissez le verre de glace concassée. Verser le rhum et compléter avec de l'eau gazeuse. Décorer et servir avec une paille.",
        strInstructionsIT:
          "Pestare le foglie di menta con lo zucchero e il succo di lime.\r\nAggiungere una spruzzata di acqua di seltz e riempi il bicchiere con ghiaccio tritato.\r\nVersare il rum e riempire con acqua di seltz.\r\nGuarnire con una fetta di lime, servire con una cannuccia.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
        strIngredient1: "Light rum",
        strIngredient2: "Lime",
        strIngredient3: "Sugar",
        strIngredient4: "Mint",
        strIngredient5: "Soda water",
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: "2-3 oz ",
        strMeasure2: "Juice of 1 ",
        strMeasure3: "2 tsp ",
        strMeasure4: "2-4 ",
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource:
          "https://pixabay.com/photos/cocktail-mojito-cocktail-recipe-5096281/",
        strImageAttribution:
          "anilaha https://pixabay.com/users/anilaha-16242978/",
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2016-11-04 09:17:09",
      },
      {
        idDrink: "15841",
        strDrink: "Mojito Extra",
        strDrinkAlternate: null,
        strTags: null,
        strVideo: null,
        strCategory: "Cocktail",
        strIBA: null,
        strAlcoholic: "Alcoholic",
        strGlass: "Collins glass",
        strInstructions:
          "Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.",
        strInstructionsES:
          "Ponga menta con zumo de limón en un vaso, machaque la menta con una cuchara, hielo, ron y rellene con club soda. Añada Angostura.",
        strInstructionsDE:
          "Minze mit Zitronensaft in ein Glas geben, Minze mit einem Löffel zerdrücken. Eis und Rum hinzufügen und mit Soda auffüllen. Krönen Sie es mit Angostura.",
        strInstructionsFR:
          "Mettre de la menthe et du jus de citron dans un verre, écraser la menthe avec une cuillère, de la glace, du rhum et compléter avec du club soda. Compléter avec de l'Angostura.",
        strInstructionsIT:
          "Metti la menta con il succo di limone in un bicchiere, schiaccia la menta con un cucchiaio, ghiaccio, rum e riempila con la soda.\r\nCompletalo con Angostura.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg",
        strIngredient1: "Mint",
        strIngredient2: "Lemon juice",
        strIngredient3: "Dark rum",
        strIngredient4: "Club soda",
        strIngredient5: "Angostura bitters",
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: "1/2 handful ",
        strMeasure2: "3 cl ",
        strMeasure3: "1/8 L Jamaican ",
        strMeasure4: "1/8 L ",
        strMeasure5: "8 drops ",
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: null,
        strImageAttribution: null,
        strCreativeCommonsConfirmed: "No",
        dateModified: "2016-11-04 09:24:43",
      },
      {
        idDrink: "178358",
        strDrink: "Mango Mojito",
        strDrinkAlternate: null,
        strTags: "Fruity",
        strVideo: null,
        strCategory: "Cocktail",
        strIBA: null,
        strAlcoholic: "Alcoholic",
        strGlass: "Jar",
        strInstructions:
          "Squeeze the juice from 1½ limes and blend with the mango to give a smooth purée.\nCut the rest of the limes into quarters, and then cut each wedge in half again. Put 2 pieces of lime in a highball glass for each person and add 1 teaspoon of caster sugar and 5-6 mint leaves to each glass. Squish everything together with a muddler or the end of a rolling pin to release all the flavours from the lime and mint.\nDivide the mango purée between the glasses and add 30ml white rum and a handful of crushed ice to each one, stirring well to mix everything together. Top up with soda water to serve and garnish with extra mint, if you like.",
        strInstructionsES:
          "Exprimir el zumo de 1½ limas y mezclarlo con el mango para obtener un puré suave.\r\nCorte el resto de las limas en cuartos y, a continuación, vuelva a cortar cada gajo por la mitad. Ponga 2 trozos de lima en un vaso alto para cada persona y añada 1 cucharadita de azúcar glas y 5-6 hojas de menta a cada vaso. Aplástelo todo con un batidor o con la punta de un rodillo para liberar todos los sabores de la lima y la menta.\r\nDivida el puré de mango entre los vasos y añada 30 ml de ron blanco y un puñado de hielo picado a cada uno, removiendo bien para mezclarlo todo. Completar con agua con gas para servir y decorar con más menta, si se desea.",
        strInstructionsDE:
          "Den Saft von 1½ Limetten auspressen und mit der Mango zu einem glatten Püree vermischen.",
        strInstructionsFR:
          "Presser le jus de 1½ citron vert et le mixer avec la mangue pour obtenir une purée lisse.\nCouper le reste des citrons verts en quatre, puis couper à nouveau chaque quartier en deux. Mettez 2 morceaux de citron vert dans un verre highball pour chaque personne et ajoutez 1 cuillère à café de sucre en poudre et 5-6 feuilles de menthe dans chaque verre. Pressez le tout à l'aide d'un mixeur ou de l'extrémité d'un rouleau à pâtisserie pour libérer tous les arômes du citron vert et de la menthe.\nRépartissez la purée de mangue dans les verres et ajoutez 30 ml de rhum blanc et une poignée de glace pilée dans chacun d'eux, en remuant bien pour mélanger le tout. Complétez avec de l'eau gazeuse pour servir et décorez avec de la menthe supplémentaire, si vous le souhaitez.",
        strInstructionsIT:
          "Spremete il succo di 1 lime e mezzo e frullatelo con il mango per ottenere una purea omogenea.\nTagliare il resto dei lime in quarti, quindi tagliare nuovamente ogni spicchio a metà. Metti 2 pezzi di lime in un bicchiere highball per ogni persona e aggiungi 1 cucchiaino di zucchero semolato e 5-6 foglie di menta in ogni bicchiere. Schiacciate il tutto con un pestello o con l'estremità di un mattarello per far sprigionare tutti i sapori del lime e della menta.\nDividete la purea di mango nei bicchieri e aggiungete in ognuno 30 ml di rum bianco e una manciata di ghiaccio tritato, mescolando bene per amalgamare il tutto. Rabboccare con acqua gassata per servire e guarnire con menta extra, se lo si desidera.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/wfqmgm1630406820.jpg",
        strIngredient1: "Lime",
        strIngredient2: "Mango",
        strIngredient3: "Mint",
        strIngredient4: "White Rum",
        strIngredient5: "Ice",
        strIngredient6: "Soda Water",
        strIngredient7: "Mango",
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: "3",
        strMeasure2: "1 Fresh",
        strMeasure3: "Sprig",
        strMeasure4: "200 ml",
        strMeasure5: "cubes",
        strMeasure6: "Top",
        strMeasure7: "Garnish with",
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: "https://www.instagram.com/p/COVlG8TMZYU",
        strImageAttribution: null,
        strCreativeCommonsConfirmed: "No",
        dateModified: null,
      },
      {
        idDrink: "178336",
        strDrink: "Blueberry Mojito",
        strDrinkAlternate: null,
        strTags: "Fruity",
        strVideo: null,
        strCategory: "Cocktail",
        strIBA: null,
        strAlcoholic: "Alcoholic",
        strGlass: "Highball glass",
        strInstructions:
          "Muddle the blueberries with the other ingredients and serve in a highball glass. Garnish with mint and a half slice of lime.",
        strInstructionsES:
          "Mezcla los arándanos con los demás ingredientes y sírvelo en un vaso highball. Decorar con menta y media rodaja de lima.",
        strInstructionsDE: null,
        strInstructionsFR:
          "Mélanger les myrtilles avec les autres ingrédients et servir dans un verre highball. Garnir de menthe et d'une demi-tranche de citron vert.",
        strInstructionsIT:
          "Pestare i mirtilli con gli altri ingredienti e servire in un bicchiere highball. Guarnire con la menta e mezza fetta di lime.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/07iep51598719977.jpg",
        strIngredient1: "Dark Rum",
        strIngredient2: "Lime Juice",
        strIngredient3: "Sugar",
        strIngredient4: "Blueberries",
        strIngredient5: "Lemon-lime soda",
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: "2 shots",
        strMeasure2: "1 shot",
        strMeasure3: "Dash",
        strMeasure4: "Whole",
        strMeasure5: "Top",
        strMeasure6: "",
        strMeasure7: "",
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: null,
        strImageAttribution: null,
        strCreativeCommonsConfirmed: "No",
        dateModified: null,
      },
    ],
  },
];
