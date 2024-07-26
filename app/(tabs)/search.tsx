import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CocktailCard } from "../components/cocktail-card/cocktail-card";
import { IngredientList } from "../components/ingredients-list/ingredients-list";
import { Input } from "../components/input/input.component";
import { getCocktailBySomeIngredientsController } from "../controller/get-cocktail.by-some-ingredients.controller";
import { Cocktail } from "../interfaces/cocktail";

export function SearchScreen() {
  const [tempIngredient, setTempIngredient] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const addIngredient = () => {
    if (!tempIngredient) return;
    const newArray = [...ingredients, tempIngredient];
    setIngredients(newArray);
    setTempIngredient("");
    console.log(ingredients);
  };

  const searchForDrinks = async () => {
    if (!ingredients || ingredients.length === 0 || ingredients[0] === "") {
      alert("Adicione pelo menos um ingrediente");
      return;
    }

    const ingredientsString = ingredients.join(",");

    const response = await getCocktailBySomeIngredientsController(
      ingredientsString
    );

    if (response) setCocktails(response);
  };

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.upperInputContainer}>
        <View style={searchStyles.inputContainer}>
          <Input
            placeholder="Digite aqui"
            onChangeText={(text) => {
              setTempIngredient(text);
            }}
            value={tempIngredient}
          />
        </View>
        <TouchableOpacity
          style={searchStyles.iconContainer}
          onPress={addIngredient}
        >
          <Ionicons name="add-circle" size={32} />
        </TouchableOpacity>
      </View>
      <IngredientList
        // ingredient={[
        //   "vodka",
        //   "rum",
        //   "ice",
        //   "vodka",
        //   "rum",
        //   "ice",
        //   "vodka",
        //   "rum",
        //   "ice",
        //   "vodka",
        //   "rum",
        //   "ice",
        // ]}
        ingredient={ingredients}
        onPress={() => {}}
      />

      <Button title="Buscar drinks" onPress={searchForDrinks} />

      <FlatList
        data={cocktails}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        renderItem={({ item, index }) => {
          return <CocktailCard cocktail={item} index={index} />;
        }}
      ></FlatList>
    </View>
  );
}

export const searchStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 100,
  },
  separator: {
    marginVertical: 32,
  },
  inputContainer: {
    width: "85%",
  },
  upperInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  iconContainer: {
    width: "10%",
  },
});
