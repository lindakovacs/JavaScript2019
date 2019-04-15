import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default class Rick extends React.Component {
  state = {
    userInput: '',
    allUsers: [],
    users: [],
    isLoading: true,
    hasError: false
  };
  componentDidMount() {
    axios('https://rickandmortyapi.com/api/character/')
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
    const input = userInput.toLowerCase();
    this.setState({
      userInput,
      users: this.state.allUsers.filter(user => {
        console.log(user);
        const name = `${user.name}`;
        return name.match(input);
      })
    });
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

  ListFooterComponent = () => {
    return (
      <SafeAreaView style={{ marginBottom: 20 }}>
        <Button title="Home" onPress={() => this.props.history.push('/')} />
      </SafeAreaView>
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
                title={`${item.name}`}
                subtitle={item.email}
                leftAvatar={{ source: { uri: item.image } }}
                containerStyle={{ borderBottomWidth: 0 }}
                key={index}
              />
            );
          }}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={() => this.ListFooterComponent()}
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
