import { Text } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

export interface IngredientsListProps {
  ingredient: string[];
  onPress: () => void;
}

export const IngredientList: FC<IngredientsListProps> = ({
  ingredient,
  onPress,
}) => {
  return (
    <FlatList
      horizontal
      data={ingredient}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={ingredientsListStyles.container}
            activeOpacity={0.7}
          >
            <Text style={{ color: "white" }}>{item}</Text>
            <Ionicons name="close-circle-outline" color="black" />
          </TouchableOpacity>
        );
      }}
    ></FlatList>
  );
};

export const ingredientsListStyles = StyleSheet.create({
  container: {
    marginRight: 8,
    backgroundColor: "#037bfc",
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 8,
  },
});
