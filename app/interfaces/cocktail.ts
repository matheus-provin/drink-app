export interface Cocktail {
  id: string;
  name: string;
  tags: string[];
  video: string;
  instructions: string;
  image: string;
  ingredients: Ingredients[];
  category: string;
}

export interface Ingredients {
  id: string | null;
  name: string;
  measure: string;
}

// {
//     "idDrink": "15266",
//     "strDrink": "avalon",
//     "strDrinkAlternate": null,
//     "strTags": null,
//     "strVideo": null,
//     "strCategory": "Ordinary Drink",
//     "strIBA": null,
//     "strAlcoholic": "Alcoholic",
//     "strGlass": "Highball glass",
//     "strInstructions": "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
//     "strInstructionsES": "Llena un vaso alto con hielo. Agregue el vodka, los jugos de limón y manzana, el licor de plátano Pisang Ambon y complete con limonada. Revuelva ligeramente y adorne con una cáscara de pepino en espiral y una cereza roja. El pepino proporciona entusiasmo y se ve atractivo. Esta bebida, creada por Timo Haimi, ganó el primer premio en el Concurso de Tragos Largos de Vodka de Finlandia de 1991.",
//     "strInstructionsDE": "Füllen Sie ein hohes Glas mit Eis. Legen Sie den Finlandia Wodka, Zitronen- und Apfelsäfte, Pisang Ambon und geben Sie Limonade dazu. Leicht umrühren und mit einer spiralförmigen Gurkenhaut und einer roten Kirsche garnieren. Die Gurke sorgt für Schärfe und sieht attraktiv aus. Dieses von Timo Haimi kreierte Getränk erhielt 1991 den ersten Preis beim Finlandia Wodka Long Drink Wettbewerb.",
//     "strInstructionsFR": null,
//     "strInstructionsIT": "Riempi un bicchiere alto di ghiaccio.\r\nVersare la Vodka, succhi di limone, mela, Pisang Ambon o un liquore alla banana e completare con la limonata.\r\nMescolare leggermente e guarnire con una buccia di cetriolo a spirale e una ciliegia rossa.\r\nIl cetriolo fornisce la scorza e sembra attraente.\r\nQuesta bevanda, creata da Timo Haimi, ha vinto il primo premio nel 1991 Finlandia Vodka Long Drink Competition.",
//     "strInstructionsZH_HANS": "",
//     "strInstructionsZH_HANT": "",
//     "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
//     "ingredients": [
//       {
//         "id": null,
//         "name": "vodka",
//         "measure": "3 parts"
//       },
//       {
//         "id": null,
//         "name": "pisang ambon",
//         "measure": "1 part "
//       },
//       {
//         "id": null,
//         "name": "apple juice",
//         "measure": "6 parts "
//       },
//       {
//         "id": null,
//         "name": "lemon juice",
//         "measure": "1 1/2 part "
//       },
//       {
//         "id": null,
//         "name": "lemonade"
//       }
//     ],
//     "strImageSource": null,
//     "strImageAttribution": null,
//     "strCreativeCommonsConfirmed": "No",
//     "dateModified": "2017-04-24 22:22:11",
//     "strInstructionsZH-HANS": null,
//     "strInstructionsZH-HANT": null,
//     "strIngredient1": "Vodka",
//     "strIngredient2": "Pisang Ambon",
//     "strIngredient3": "Apple juice",
//     "strIngredient4": "Lemon juice",
//     "strIngredient5": "Lemonade",
//     "strIngredient6": null,
//     "strIngredient7": null,
//     "strIngredient8": null,
//     "strIngredient9": null,
//     "strIngredient10": null,
//     "strIngredient11": null,
//     "strIngredient12": null,
//     "strIngredient13": null,
//     "strIngredient14": null,
//     "strIngredient15": null,
//     "strMeasure1": "3 parts",
//     "strMeasure2": "1 part ",
//     "strMeasure3": "6 parts ",
//     "strMeasure4": "1 1/2 part ",
//     "strMeasure5": null,
//     "strMeasure6": null,
//     "strMeasure7": null,
//     "strMeasure8": null,
//     "strMeasure9": null,
//     "strMeasure10": null,
//     "strMeasure11": null,
//     "strMeasure12": null,
//     "strMeasure13": null,
//     "strMeasure14": null,
//     "strMeasure15": null
//   },
