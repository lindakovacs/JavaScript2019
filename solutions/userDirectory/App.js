import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    userInput: '',
    allUsers: [],
    users: [],
    isLoading: true,
    hasError: false
  };
  componentDidMount() {
    axios('https://randomuser.me/api?results=100&inc=name,email,picture')
      .then(response => {
        this.setState({
          allUsers: response.data.results,
          isLoading: false,
          hasError: false
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          hasError: true
        });
      });
  }

  filter = userInput => {
    // console.log(userInput);
    // this.setState({
    //   userInput
    // });
    const input = userInput.toLowerCase();
    this.setState(
      {
        userInput,
        users: this.state.allUsers.filter(user => {
          const name = `${user.name.first} ${user.name.last}`;
          return name.match(input);
        })
      },
      () => console.log(this.state.users)
    );
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        value={this.state.userInput}
        onChangeText={this.filter}
        autoCorrect={false}
      />
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  render() {
    const { allUsers, isLoading, users } = this.state;

    return !isLoading ? (
      <SafeAreaView>
        {this.renderHeader()}
        <FlatList
          data={users.length > 0 ? users : allUsers}
          renderItem={({ item }, index) => {
            return (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                containerStyle={{ borderBottomWidth: 0 }}
                key={index}
              />
            );
          }}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </SafeAreaView>
    ) : (
      <SafeAreaView>
        <Text>Data</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
