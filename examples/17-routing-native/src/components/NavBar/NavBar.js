import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#167FFB"
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  text: {
    fontSize: 20,
    color: "#fff"
  }
};

function NavBar() {
  console.log(styles.text);
  return (
    <View style={styles.container}>
      <Link to="/" style={styles.link}>
        <Text style={styles.text}>Movies</Text>
      </Link>
      <Link to="/theatres" style={styles.link}>
        <Text style={styles.text}>Theatres</Text>
      </Link>
    </View>
  );
}

export default NavBar;
