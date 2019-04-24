import React from "react";
import {
  ScrollView,
  //Image,
  Text,
  Button
} from "react-native";

function Users(props) {
  return (
      <ScrollView>
        <Text>Users Component</Text>
        {/* <Image
          source={{
            uri: "https://rickandmortyapi.com/api/character/"
          }}
          style={styles.Image}
        /> */}
        <Button title="Back to Menu" onPress={() => props.history.push("/")} />
      </ScrollView>
  );
}

const styles = {
  Image: {
    height: 250,
    width: 250
  }
};

export default Users;

// import React from "react";
// import { ScrollView, View, Text, Image } from "react-native";
// // import { Link } from "react-router-native";

// function Home(props) {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Random Characters and Quotes</Text>
//       <Image className="charImg" src={props.image} alt={props.name} />
//       <div>{props.name}</div>
//     </ScrollView>

    //  <ScrollView style={styles.container}>
    //    <Text style={styles.title}>Random Characters and Quotes</Text>
    //    {Object.entries(quote).map(([quoteKey, quote], index) => {
    //      const key = `quote-${index}`;
    //      const link = "/quote/" + quoteKey;
    //      return (
    //        <View key={key} style={styles.quote}>
    //          <Link to={link}>
    //            <Text style={styles.quoteTitle}>{quote.title}</Text>
    //          </Link>
    //          <Link to={link}>
    //            <Image
    //              source={{ uri: movie.quoteImage }}
    //              style={styles.moviePoster}
    //            />
    //          </Link>
    //        </View>
    //      );
    //    })}
    //  </ScrollView>
//   );
// }

// export default Home;

// const styles = {
//   container: {
//     paddingHorizontal: 8
//   },
//   title: {
//     fontSize: 40,
//     marginVertical: 12
    // },
    // movie: {
    //   borderTopWidth: 1,
    //   borderTopColor: "rgb(225, 225, 225)",
    //   marginBottom: 24
    // },
    // movieTitle: {
    //   fontSize: 24,
    //   marginVertical: 8
    // },
    // moviePoster: {
    //   width: 200,
    //   height: 300
//   }
// };
