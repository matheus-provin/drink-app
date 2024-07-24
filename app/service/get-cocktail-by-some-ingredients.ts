import axios from "axios";
import { getCocktailBySomeIngredientsFactory } from "../factory/get-cocktail-by-some-ingredients.factory";
import { Cocktail } from "../interfaces/cocktail";

export async function getCocktailBySomeIngredients(
  ingredients: string
): Promise<Cocktail[]> {
  try {
    const response = await axios.get(
      `https://api.matheusprovin.dev/GetDrinksByIngredient/SomeIngredients?ingredients=${ingredients}`
    );

    return getCocktailBySomeIngredientsFactory(response.data);
  } catch (error) {
    throw new Error("Erro na API");
  }
}
