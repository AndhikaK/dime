import { useEffect } from "react";
import { Text } from "react-native";

import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.navigate("/(home)");
  }, [router]);

  return (
    <SafeAreaView>
      <Text>test</Text>
    </SafeAreaView>
  );
}
