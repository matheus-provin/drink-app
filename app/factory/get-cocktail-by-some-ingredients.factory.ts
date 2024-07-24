import { Cocktail, Ingredients } from "../interfaces/cocktail";

export function cocktailIngredientsFactory(data: any): Ingredients[] {
  const ingredients = data.map((ingredient: any) => ({
    id: ingredient?.id || null,
    name: ingredient?.name || "",
    measure: ingredient?.measure || "",
  }));

  return ingredients;
}
export function getCocktailBySomeIngredientsFactory(data: any): Cocktail[] {
  const cocktailData = data.map((cocktail: any) => ({
    id: cocktail?.idDrink || "",
    name: cocktail?.strDrink || "",
    tags: cocktail?.strTags?.split(",") || [],
    video: cocktail?.strVideo || "",
    instructions: cocktail?.strInstructions || "",
    image: cocktail.strDrinkThumb || "",
    category: cocktail?.strCategory || "",
    ingredients: cocktailIngredientsFactory(cocktail?.ingredients),
  }));
  //   console.log(cocktailData);
  return cocktailData;
}
