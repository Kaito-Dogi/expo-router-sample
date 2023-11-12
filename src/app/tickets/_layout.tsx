import { ParamListBase, StackNavigationState } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import { withLayoutContext } from "expo-router";

const { Navigator } = createStackNavigator();

const JsStack = withLayoutContext<
  StackNavigationOptions,
  typeof Navigator,
  StackNavigationState<ParamListBase>,
  StackNavigationEventMap
>(Navigator);

export default function Layout() {
  return (
    <JsStack screenOptions={{ headerShown: false }}>
      <JsStack.Screen name="index" />
      {/**
       * モーダルは Android で動作しないため JS Stack Navigator で独自に実装する必要がある
       * - https://github.com/expo/router/issues/640
       * - https://docs.expo.dev/router/advanced/stack/#javascript-stack-with-react-navigationstack
       */}
      <JsStack.Screen
        name="[id]"
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          presentation: "modal",
        }}
      />
    </JsStack>
  );
}
