import { Link } from "expo-router";
import { Button } from "heroui-native/button";
import { Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View className="">
      <Text>Tab Two</Text>
      <Link href="/">Go to tab 2</Link>
      <View />
      <Text>Tab Two</Text>
      <Button className="bg-primary">tab 2 button</Button>
    </View>
  );
}
