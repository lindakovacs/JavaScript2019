var updateProduct = (product, action) => {
  var newProduct;
  // Do not change above this line

  switch (action.type) {
    case "ADD":
      newProduct = {
        ...product,
        cost: product.cost + action.payload
      };
      break;
    case "MULTIPLY":
      newProduct = {
        ...product,
        cost: product.cost * action.payload
      };
      break;
    case "SUBTRACT":
      newProduct = {
        ...product,
        cost: product.cost - action.payload
      };
      break;
    case "DIVIDE":
      newProduct = {
        ...product,
        cost: product.cost / action.payload
      };
      break;
    default:
      newProduct = { ...product };
  }

  return newProduct; // Do not change this
};

module.exports = {
  updateProduct
};
