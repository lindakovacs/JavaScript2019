import React, { Component } from "react";
import axios from "axios";

export default class Rickmorty extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      userInput: ""
    };

    this.getAllData = this.getAllData.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  componentDidMount() {
    this.getAllData();
    axios.get("/data").then(res => {
      this.setState({ character: res.data });
    });
  }

  getAllData() {
    let allData = [];
    for (let i = 1; i <= 25; i++) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${i}`)
        .then(res => {
          for (let j = 0; j < res.data.results.length; j++) {
            allData.push(res.data.results[j]);
          }
        });
    }
    console.log("all data", allData);
    this.setState({ allPages: allData });
  }

  getCharacter() {
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      this.setState({
        character: res.data.results
      });
      this.setState({
        character: this.state.allPages.filter(person =>
          person.name.toLowerCase().includes(this.state.userInput.toLowerCase())
        )
      });
    });
  }

  render() {
    const { character } = this.state;

    const result = character.map(n => {
      return (
        <div key={n.id}>
          <Home image={n.image} name={n.name} id={n.id} person={n} />
        </div>
      );
    });

    return (
      <div className="component">
        <header>
          <div className="search-bar">
            <input
              className="search input"
              onChange={e => this.handleChange(e.target.value)}
              placeholder="search"
            />
            <button className="search" onClick={() => this.getCharacter()}>
              Search
            </button>
          </div>
        </header>
        <div className="parent">
          <div className="results">{result}</div>
        </div>
      </div>
    );
  }
}





// import React from "react";
// import {
//   ScrollView,
//   Image,
//   Text,
//   Button
// } from "react-native";

// function RickMorty(props) {
//   return (
//       <ScrollView>
//         <Text>Rick and Morty Component</Text>
//         {/* <Image axios.get("https://rickandmortyapi.com/api/character")
//           source={{
//             uri: "https://rickandmortyapi.com/api/character/"
//           }}
//           style={styles.Image}
//         /> */}
//         <Button title="Back to Menu" onPress={() => props.history.push("/")} />
//       </ScrollView>
//   );
// }

// const styles = {
//   Image: {
//     height: 220,
//     width: 220
//   }
// };

// export default RickMorty;



// exercises/15-axios/ exercise

// const populateDropDown = data => {
//   console.log(data);
//   $("#dropdown").empty();
//   // $.each(data.results, function(i, p) {
//   data.forEach(p => {
//     console.log(p);
//     $("#dropdown").append(
//       $("<option></option>")
//         .val(p.name)
//         .html(p.name)
//     );
//   });
// };

// axios.get("https://rickandmortyapi.com/api/character").then(response => {
//     populateDropDown(response.data.results);
//   })