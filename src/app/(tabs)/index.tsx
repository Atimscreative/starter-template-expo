import { Button } from "heroui-native/button";
import { StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="">
      <Text>Tab One</Text>
      <Button>Tab One Button</Button>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
