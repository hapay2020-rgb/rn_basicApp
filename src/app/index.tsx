import { Text, View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden={false} /> 
      <Text style={styles.mainText}>Hello World!</Text>
      <Image
        source={{
          uri: "https://picsum.photos/id/237/200/200",
        }}
        style={{ width: 200, height: 200 }}
        //resizeMode="cover"
      />
      <TextInput style={styles.inputText} placeholder="Enter text here..."></TextInput>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
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
  inputText: {
    // width: 200,
    // height: 40,
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});
