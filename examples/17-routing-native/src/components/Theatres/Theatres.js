import React from "react";
import { View, Text } from "react-native";

const styles = {
  container: {
    paddingHorizontal: 8
  },
  title: {
    fontSize: 32,
    marginVertical: 12
  },
  theatre: {
    marginBottom: 16
  },
  theatreName: {
    fontWeight: "bold"
  }
};

function Theatres() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Theatres</Text>
      <View style={styles.theatre}>
        <Text style={styles.theatreName}>
          Regal Crossgates Stadium 18 &amp; IMAX
        </Text>
        <Text>120 B Washington Avenue Ext Albany, NY</Text>
      </View>
      <View style={styles.theatre}>
        <Text style={styles.theatreName}>
          Regal Colonie Center Stadium 13 &amp; RPX
        </Text>
        <Text>131 Colonie Center Albany, NY</Text>
      </View>
      <View style={styles.theatre}>
        <Text style={styles.theatreName}>Regal East Greenbush 8</Text>
        <Text>279 Troy Road Rensselaer, NY</Text>
      </View>
      <View style={styles.theatre}>
        <Text style={styles.theatreName}>
          Regal Clifton Park Stadium 10 &amp; RPX
        </Text>
        <Text>22 Clifton Country Road Clifton Park, NY</Text>
      </View>
    </View>
  );
}

export default Theatres;
