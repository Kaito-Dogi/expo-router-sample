import { Redirect, useLocalSearchParams } from "expo-router";

import { TicketQrModalScreen } from "@/src/components/screens/TicketQrModalScreen";

export default function Page() {
  const { id } = useLocalSearchParams();
  if (typeof id !== "string") return <Redirect href="/[...unmatched]" />;

  return <TicketQrModalScreen id={id} />;
}
