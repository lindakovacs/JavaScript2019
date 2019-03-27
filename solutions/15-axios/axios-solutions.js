/**
 * As a user, I should be greeted with a list of all rick and morty characters
 * Helpful link for populating a dropdown
 *
 * This is the URL for the API you will be using. The method should be GET.
 * https://rickandmortyapi.com/api/character
 *
 * Use the AXIOS library to make AJAX requests.
 */

/**
 * Call on this function to populates the dropdown on the page with a character.
 * @param {Object} data the entire AJAX response
 */
const populateDropDown = data => {
  $("#dropdown").empty();
  data.forEach(p => {
    // This is what you need to replace
    $("#dropdown").append(
      $("<option></option>")
        .val(p.name)
        .html(p.name)
    );
  });
};

/**
 * Axios here
 */

// Method 1
axios
  .get("https://rickandmortyapi.com/api/character")
  .then(data => populateDropDown(data.data.results))
  .catch(() => {
    throw new Error("Error");
  });

// Method 2
axios({
  method: "GET",
  url: "https://rickandmortyapi.com/api/character"
})
  .then(data => populateDropDown(data.data.results))
  .catch(() => {
    throw new Error("Error");
  });
