import { router } from "expo-router";
import { FC, useCallback } from "react";
import { Pressable, View } from "react-native";

import { Text } from "@/src/components/ui/Text";

import { styles } from "./UnmatchedScreen.styles";

/** @package */
export const UnmatchedScreen: FC = () => {
  const onClick = useCallback(() => {
    router.push("/events");
  }, [router]);

  return (
    <View style={styles.container}>
      <Text text="存在しない画面です ><" color="disabled" textAlign="center" />
      <Pressable onPress={onClick} style={styles.button}>
        <Text
          text="ホームに戻る"
          size="m"
          color="onPrimary"
          fontWeight="bold"
          textAlign="center"
          numberOfLines={1}
        />
      </Pressable>
    </View>
  );
};
