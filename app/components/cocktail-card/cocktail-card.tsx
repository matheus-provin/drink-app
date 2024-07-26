import { firstLetterUppercase } from "@/app/functions/first-letter-uppercase";
import { Cocktail } from "@/app/interfaces/cocktail";
import { Text } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("screen");

interface CocktailCardProps {
  cocktail: Cocktail;
  index: number;
}

export const CocktailCard: FC<CocktailCardProps> = ({ cocktail, index }) => {
  return (
    <TouchableOpacity
      style={cocktailCardStyles.cardContainer}
      activeOpacity={0.7}
    >
      <TouchableOpacity style={cocktailCardStyles.headerContainer}>
        <Text
          style={cocktailCardStyles.titleText}
          numberOfLines={1}
          ellipsizeMode="clip"
        >
          {firstLetterUppercase(cocktail.name)}
        </Text>
        <Ionicons name="chevron-forward-outline" size={24} />
      </TouchableOpacity>
      <Image
        source={{
          uri: cocktail.image,
          width: width / 2.8,
          height: width / 2.8,
        }}
      />
    </TouchableOpacity>
  );
};
export const cocktailCardStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContainer: {
    backgroundColor: "#cedfff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    width: width / 2.5,
  },
  titleText: {
    color: "black",
    fontSize: 16,
  },
});
