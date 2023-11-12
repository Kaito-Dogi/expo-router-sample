import { useLocalSearchParams } from "expo-router";

import { Text } from "@/components/ui/Text";

export default function Page() {
  const { id } = useLocalSearchParams();
  return <Text text={`Ticket QR Modal: ${id}`} />;
}
