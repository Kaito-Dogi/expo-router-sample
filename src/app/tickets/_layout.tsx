import { ParamListBase, StackNavigationState } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import { withLayoutContext } from "expo-router";

import { colors } from "@/src/styles/colors";

const { Navigator } = createStackNavigator();

const JsStack = withLayoutContext<
  StackNavigationOptions,
  typeof Navigator,
  StackNavigationState<ParamListBase>,
  StackNavigationEventMap
>(Navigator);

export default function Layout() {
  return (
    <JsStack screenOptions={{ headerTintColor: colors.primary }}>
      <JsStack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "チケット",
        }}
      />
      {/**
       * モーダルは Android で動作しないため JS Stack Navigator で独自に実装する必要がある
       * - https://github.com/expo/router/issues/640
       * - https://docs.expo.dev/router/advanced/stack/#javascript-stack-with-react-navigationstack
       */}
      <JsStack.Screen
        name="[id]"
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          title: "QR コード",
          presentation: "modal",
        }}
      />
    </JsStack>
  );
}
