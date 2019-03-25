/**
 * As a user, I should be greeted with a list of all rick and morty characters
 * As a user, I should be able to select a character from the dropdown and have that user displayed as an image
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
  $.each(data.results, function(i, p) {
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
