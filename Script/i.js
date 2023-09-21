let allProducts = [
  { id: 1, name: "laptop", price: 17000000 },
  { id: 2, name: "phone", price: 7000000 },
  { id: 3, name: "milk", price: 35000 },
  { id: 4, name: "pen", price: 12000 },
  { id: 5, name: "pencil", price: 9000 },
  { id: 6, name: "cable", price: 55000 },
  { id: 7, name: "water", price: 6000 },
  { id: 8, name: "soft drink", price: 13000 },
];

let userBasket = [
  { id: 1, name: "milk", price: 35000 },
  { id: 2, name: "water", price: 6000 },
];

let userRequest = prompt("1. ADD product \n 2. Remove product");

if (userRequest == "1") {
  let userProductName = prompt("Enter your Name: ");

  let productData;

  let isInShop = allProducts.some(function (product) {
    if (product.name === userProductName) {
      productData = product;
      return true;
    }
  });
  if (isInShop == true) {
    let newProduct = {
      id: 3,
      name: productData.name,
      price: productData.price,
    };
    userBasket.push(newProduct);
    console.log("Basket: ", userBasket);
  } else {
    alert("محصول موجود نمی باشد.");
  }
} else if (userRequest == "2") {
  let userProductName = prompt("Enter your Name: ");
  let productIndex = userBasket.findIndex(function (product) {
    return product.name === userProductName;
  });
  userBasket.splice(productIndex, 1);
  console.log("Basket: ", userBasket);
} else {
  alert("گزینه صحیح را انتخاب نمایید");
}
