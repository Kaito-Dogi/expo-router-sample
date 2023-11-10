import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native";

import { LocationIcon } from "@/components/icon/LocationIcon";

import { styles } from "./styles";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <Tabs screenOptions={{ headerShown: false }} initialRouteName="events">
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
      </Tabs>
    </SafeAreaView>
  );
}
