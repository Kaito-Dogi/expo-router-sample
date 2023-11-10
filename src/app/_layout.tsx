import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";

import { LocationIcon } from "@/components/icon/LocationIcon";

import { styles } from "./styles";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      {/**
       * initialRouteName が機能しないので index で /events にリダイレクトしている
       * https://github.com/expo/router/issues/428
       */}
      <Tabs screenOptions={{ headerShown: false }} initialRouteName="/events">
        <Tabs.Screen
          name="events"
          options={{
            href: "events",
            title: "イベント",
            tabBarIcon: () => <LocationIcon />,
          }}
        />
        <Tabs.Screen
          name="tickets"
          options={{
            href: "tickets",
            title: "チケット",
            tabBarIcon: () => <LocationIcon />,
          }}
        />
        {/**
         * リダイレクト用の index は Bottom Tabs で表示しない
         * https://docs.expo.dev/router/advanced/tabs/#hiding-a-tab
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
