import { Text } from "@src/components/ui/Text";
import { Link } from "expo-router";
@src/
export default function Page() {
  return (
    <>
      <Text text="Tickets Page" />
      <Link
        href={{
          pathname: "/tickets/[id]",
          params: { id: 1 },
        }}
      >
        QR モーダル1を表示
      </Link>
      <Link
        href={{
          pathname: "/tickets/[id]",
          params: { id: 2 },
        }}
      >
        QR モーダル2を表示
      </Link>
    </>
  );
}
