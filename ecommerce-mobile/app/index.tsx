import { FlatList } from "react-native";
import product from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <FlatList 
    data={ product } 
    numColumns={2}
    contentContainerClassName="gap-2"
    columnWrapperClassName="gap-2"
    renderItem={({ item }) => <ProductListItem product = { item } />}
    />
  );
}
