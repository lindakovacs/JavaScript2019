import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';

const Menu = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => props.history.push('/Rick')}>
          <Image
            source={{
              uri: `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
            }}
            style={styles.image}
          />
          <Text>Rick Morty</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => props.history.push('/Ron')}>
          <Image source={require('../images/ron.jpg')} style={styles.image} />
          <Text style={styles.title}>Ron Swanson</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../images/chuck.jpeg')}
            style={styles.image}
          />
          <Text style={styles.title}>Chuck Norris</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../images/chuck.jpeg')}
            style={styles.image}
          />
          <Text style={styles.title}>Chuck Norris</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 5
  },
  image: {
    width: 150,
    height: 150
  },
  title: {
    textAlign: 'center'
  }
});

export default Menu;
