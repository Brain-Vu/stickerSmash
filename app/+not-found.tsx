import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Return to home screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4CC37",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    fontSize: 30,
    textDecorationLine: "underline",
    color: "#272D2D",
  },
});
