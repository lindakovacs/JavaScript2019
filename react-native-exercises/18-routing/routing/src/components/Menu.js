import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
 // Link
} from "react-native";

function Menu(props) {
  console.log(props);
  return (
      <ScrollView>
        <Text>Rick and Morty</Text>
        <TouchableOpacity onPress={() => props.history.push("/RickMorty")}>
          <Image
            style={styles.Image}
            source={{
              uri: "https://rickandmortyapi.com/api/character/"
            }}
          />
        </TouchableOpacity>

        <Text>Users</Text>
        <TouchableOpacity onPress={() => props.history.push("/Users")}>
          <Image
            style={styles.Image}
            source={{
              uri:
                "https://rickandmortyapi.com/api/character/"
            }}
          />
        </TouchableOpacity>
      </ScrollView>
  );
}

const styles = {
  Image: {
    height: 250,
    width: 250
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 16
  }
};

export default Menu;