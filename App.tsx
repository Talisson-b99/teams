import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Groups } from "@/screens/groups";
import Loading from "@/components/loading";

import theme from "@/theme";
import NewGroup from "@/screens/new-group";

export default function App() {
  const [load, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        animated
        backgroundColor="transparent"
        translucent
      />
      {load ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
