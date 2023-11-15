import { Redirect, useLocalSearchParams } from "expo-router";

import { EventDetailScreen } from "@/src/components/screens/EventDetailScreen";

export default function Page() {
  const { id } = useLocalSearchParams();
  if (typeof id !== "string") return <Redirect href="/404" />;

  return <EventDetailScreen id={id} />;
}
