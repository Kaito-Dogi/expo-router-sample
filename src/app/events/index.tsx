import { Link } from "expo-router";

import { Text } from "@/components/ui/Text";

export default function Page() {
  return (
    <>
      <Text text="Events Page" />
      <Link
        href={{
          pathname: "/events/[id]",
          params: { id: 1 },
        }}
      >
        詳細ページ1へ
      </Link>
      <Link
        href={{
          pathname: "/events/[id]",
          params: { id: 2 },
        }}
      >
        詳細ページ2へ
      </Link>
    </>
  );
}
