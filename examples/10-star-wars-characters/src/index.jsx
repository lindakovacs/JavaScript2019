import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importing CSS

/**
 * Importing images that I will use in our data below
 */
import HanSoloImage from "./images/HanSolo.png";
import ReyImage from "./images/Rey.png";

/**
 * Our data
 */
const characters = {
  1: {
    name: "Han Solo",
    bio:
      "A smuggler who became a leader in the Alliance to Restore the Republic and an instrumental figure in the defeat of the Galactic Empire during the Galactic Civil War.",
    image: HanSoloImage
  },
  2: {
    name: "Rey",
    bio:
      "Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict.",
    image: ReyImage
  }
};

/**
 * A link disguised as a button component. You would use like this:
 * @example
 * <ButtonLink>Click Me</ButtonLink>
 * @ props.children is whatever is inside the <ButtonLink></ButtonLink>,
 * which in the example above is "Click Me".
 */
function ButtonLink(props) {
  return (
    <a href={props.href} className="button">
      {props.children}
    </a>
  );
}

/**
 * This component uses CSS classes to add a rounded image effect to any image.
 * It uses the spread attribute so that we can use any HTML attributes we want as props.
 * @param {*} props in this component, any HTML attributes that should be added to the image
 * @example
 * <RoundedImage src="./images/HanSoloImage.png" className="bg-warning" />
 */
function RoundedImage(props) {
  const className = props.className ? `${props.className} rounded` : "rounded";
  return <img {...props} className={className} />;
}

/**
 * This represents the profile of a single character.
 * If the character's bio is greater than 200 characters, it will shorten it
 * add an ellipse (...).
 * @param {*} props
 */
function CharacterProfile(props) {
  const isBioLong = props.bio.length > 100;
  const bio = isBioLong ? props.bio.substring(0, 200) + " ..." : props.bio;
  return (
    <div className="CharacterProfile">
      <div className="CharacterProfile-image">
        <RoundedImage src={props.image} alt={props.name} />
      </div>
      <div className="CharacterProfile-text">
        <h2>{props.name}</h2>
        <p>{bio}</p>
        {isBioLong && <ButtonLink href={""}>Read More</ButtonLink>}
      </div>
    </div>
  );
}

/**
 * This is the highest level React component, that takes the data in
 * the *characters* object literal above, loops through it,
 * and then displays each character in <CharacterProfile />
 */
function Characters() {
  return (
    <main className="content">
      <h1>Characters</h1>
      <div className="Characters">
        {/*
         * Here we convert the *characters* object literal above into an array with *Object.values*,
         * and then loop through each item (which is each character in the characters object)
         */}
        {Object.values(characters).map((character, i) => {
          const key = `character${i}`;
          /**
           * We are display each item with <CharacterProfile />
           */
          return (
            <div key={key}>
              <CharacterProfile
                name={character.name}
                image={character.image}
                bio={character.bio}
                width="200"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

/**
 * This inserts everything above into the page.
 */
ReactDOM.render(<Characters />, document.getElementById("root"));
