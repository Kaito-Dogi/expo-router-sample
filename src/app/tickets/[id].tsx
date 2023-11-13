import { QrModalScreen } from "@src/components/screens/QrModalScreen";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const { id } = useLocalSearchParams();
  return <QrModalScreen id={id} />;
}
