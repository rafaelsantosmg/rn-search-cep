import { SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import Router from "./src/routes";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6E48A",
      }}
    >
      <Header />
      <Router />
    </SafeAreaView>
  );
}
