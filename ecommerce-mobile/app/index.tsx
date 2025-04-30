import { FlatList, Text, View } from "react-native";
import product from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <Button variant="outline">
      <ButtonText>Click Here</ButtonText>
    </Button>
  );
  // return (
  //   <FlatList 
  //   data={ product } 
  //   renderItem={({ item }) => <ProductListItem product = { item } />}
  //   />
  // );
}
