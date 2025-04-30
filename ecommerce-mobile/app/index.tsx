import { FlatList, Text, View } from "react-native";
import product from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";

export default function HomeScreen() {
  return (
    <FlatList 
    data={ product } 
    renderItem={({ item }) => <ProductListItem product = { item } />}
    />
  );
}
