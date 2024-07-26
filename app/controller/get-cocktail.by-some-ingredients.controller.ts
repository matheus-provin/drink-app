import { getCocktailBySomeIngredients } from "../service/get-cocktail-by-some-ingredients";

export async function getCocktailBySomeIngredientsController(
  ingredients: string
) {
  const response = await getCocktailBySomeIngredients(ingredients);

  return response;
}
