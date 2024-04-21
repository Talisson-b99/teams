import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Players from "@/screens/players";
import { Groups } from "@/screens/groups";
import NewGroup from "@/screens/new-group";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Screen name="groups" component={Groups} />
      <Screen
        name="new"
        component={NewGroup}
        options={{
          animation: "slide_from_bottom",
        }}
      />
      <Screen name="players" component={Players} />
    </Navigator>
  );
};

export default AppRoutes;
