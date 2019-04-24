import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Button
} from "react-native";

function RonSwanson(props) {
    //Async / Await
    async function getRonSwansonQuote() {
      const url = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(`${data[0]} - Ron Swanson`);
    }
    getRonSwansonQuote();

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Ron Swanson Component</Text>
        {/* <Image
          source={{
            uri: "https://rickandmortyapi.com/api/character/"
          }}
          style={styles.Image}
        /> */}
        <Button title="Back to Menu" onPress={() => props.history.push("/")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  Image: {
    height: 220,
    width: 220
  }
};

export default RonSwanson;


// function getQuote() {
//   var quote;
//   return new Promise(function(resolve, reject) {
//     request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
//       quote = body;
//       resolve(quote);
//     });
//   });
// }

// async function Quote() {
//   var quote = await getQuote();
//   console.log(quote);
// }

// Quote();
// console.log('Ron once said,');


/*
// Promise
function getRonSwansonQuote() {
  const url = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(`${data[0]} - Ron Swanson`));
}
getRonSwansonQuote();

//Async / Await
async function getRonSwansonQuote2() {
  const url = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(`${data[0]} - Ron Swanson`);
}
getRonSwansonQuote2();
*/



// exercises/15-async-await exercise

// const addQuoteToPage = text => {
//   const htmlElem = document.getElementById("quote");
//   htmlElem.textContent = text;
// };

// const ajaxRequest  = async () => {
//   let data = await axios
//     .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
//   return data;
// };

// document.getElementsByTagName("button")[0].addEventListener("click", e => {
//   ajaxRequest()
//   .then(quote => addQuoteToPage(quote.data));
// });
