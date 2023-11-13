import { setBackgroundColorAsync } from "expo-navigation-bar";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import { Platform, SafeAreaView } from "react-native";

import { HomeIcon, TicketIcon } from "@/components/icons";
import { colors } from "@/styles/colors";

import { styles } from "./styles";

export default function Layout() {
  useEffect(() => {
    /**
     * Expo で Android の Native Navigation Bar を透過させることはできないので、
     * Bottom Tabs と同じ色に設定している
     * - https://github.com/expo/expo/issues/16036
     * - https://docs.expo.dev/versions/latest/sdk/navigation-bar/#navigationbarsetbackgroundcolorasynccolor
     */
    Platform.OS === "android" && setBackgroundColorAsync(colors.surface);
  }, [colors.surface]);

  return (
    <SafeAreaView style={styles.container}>
      {/**
       * initialRouteName が機能しないので index で /events にリダイレクトしている
       * - https://github.com/expo/router/issues/428
       */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
        initialRouteName="/events"
      >
        <Tabs.Screen
          name="events"
          options={{
            href: "events",
            title: "イベント",
            tabBarIcon: ({ color, focused }) => (
              <HomeIcon color={color as `#${string}`} outline={!focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="tickets"
          options={{
            href: "tickets",
            title: "チケット",
            tabBarIcon: ({ color, focused }) => (
              <TicketIcon color={color as `#${string}`} outline={!focused} />
            ),
          }}
        />
        {/**
         * リダイレクト用の index は Bottom Tabs で表示しない
         * - https://docs.expo.dev/router/advanced/tabs/#hiding-a-tab
         */}
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
