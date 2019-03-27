/**
 * As a user, I should be able to click on a button and get a quote.
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */

/**
 * Call on this function to display the quote on the page.
 * @param {string} text a single quote
 */
const addQuoteToPage = text => {
  const htmlElem = document.getElementById("quote");
  htmlElem.textContent = text;
};

/**
 * Create an ajaxRequest() function. It should use async & await.
 * HINT: you will also need to use Axios to make an HTTP request.
 */
const ajaxRequest = async () => {
  return await axios
    .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(response => response.data[0]);
};

/**
 * This attaches click event to the button
 */
document.getElementsByTagName("button")[0].addEventListener("click", e => {
  /**
   * Call on ajaxRequest() here. Then display the quote on the page with addQuoteToPage().
   */
  ajaxRequest().then(quote => addQuoteToPage(quote));
});
