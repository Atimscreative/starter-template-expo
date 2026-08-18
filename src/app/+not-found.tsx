import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-3xl font-bold text-white">This screen doesn't exist.</Text>

        <Link href="/">
          <Text className="text-3xl font-bold text-white">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

 
