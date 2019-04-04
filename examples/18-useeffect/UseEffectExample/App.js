import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, FlatList, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      axios.get(`https://reqres.in/api/users?page=${count}`).then(response => {
        console.log(response.data.data);
        setUsers(response.data.data);
      });
    }
  }, [count]);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Get Users" onPress={() => setCount(count + 1)} />
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <View key={`user-${item.id}`} style={styles.user}>
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 128, height: 128 }}
              />
              <Text h4>
                {item.first_name} {item.last_name}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  },
  user: {
    display: "flex",
    alignItems: "center",
    padding: 5
  }
});
