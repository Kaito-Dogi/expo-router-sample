import { useLocalSearchParams } from "expo-router";

import { EventDetailScreen } from "@/components/screens/EventDetailScreen";

export default function Page() {
  const { id } = useLocalSearchParams();
  if (typeof id !== "string") return null;

  return <EventDetailScreen id={id} />;
}
