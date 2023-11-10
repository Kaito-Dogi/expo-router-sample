import { Link } from "expo-router";

import { Text } from "@/components/ui/Text";

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
