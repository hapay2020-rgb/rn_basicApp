import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden={false} 
      /> 
      <Text style={styles.mainText}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    // flex: 0.5,
    alignItems: "center",
    justifyContent: "center",

    fontSize: 20,
    fontWeight: "bold",


    borderWidth: 1,
    borderColor: "red",

    padding: 10,
    margin: 10,
    borderRadius: 10,

  },
});
