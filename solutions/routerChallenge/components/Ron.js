import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
export default class Ron extends React.Component {
  state = {
    quote: ''
  };
  getQuotes = async () => {
    const quote = await axios(
      'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
    );
    console.log(quote);
    this.setState({ quote: quote.data });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../images/ronswanson.png')}
          style={styles.image}
        />
        <Text style={{ color: '#fff', fontSize: 20 }}>{this.state.quote}</Text>
        <View>
          <Button title="Quote" onPress={() => this.getQuotes()} />
          <Button title="Home" onPress={() => this.props.history.push('/')} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  image: {
    height: 300,
    width: 300
  }
});
