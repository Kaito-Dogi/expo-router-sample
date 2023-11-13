import { EventDetailScreen } from "@src/components/screens/EventDetailScreen";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const { id } = useLocalSearchParams();
  if (typeof id !== "string") return null;

  return <EventDetailScreen id={id} />;
}
