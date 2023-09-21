let allProducts = [
  { id: 1, name: "لپ تاپ", price: 17000000 },
  { id: 2, name: "گوشی", price: 7000000 },
  { id: 3, name: "شیر", price: 35000 },
  { id: 4, name: "خودکار", price: 12000 },
  { id: 5, name: "مداد", price: 9000 },
  { id: 6, name: "شارژر", price: 55000 },
  { id: 7, name: "آب", price: 6000 },
  { id: 8, name: "نوشابه", price: 13000 },
];

let userBasket = [
  { id: 1, name: "شیر", price: 35000 },
  { id: 2, name: "آب", price: 6000 },
];

// allProducts.forEach(function (product) {
//   alert(" نام محصول : " + product.name)
// });

let userRequest = prompt("1. اضافه کردن کالا \n 2. حذف کردن کالا \n ");

if (userRequest == "1") {
  let userProductName = prompt("نام محصول مدنظر را وارد کنید : \n ");

  let productData;

  let isInShop = allProducts.some(function (product) {
    if (product.name === userProductName) {
      productData = product;
      return true;
    }
  });
  if (isInShop == true) {
    let newProduct = {
      id: userBasket.length + 1,
      name: productData.name,
      price: productData.price,
    };
    userBasket.push(newProduct);

    let sum = 0;

    userBasket.forEach(function (product) {
      sum += product.price;
    });
    // userBasket.forEach(function (product) {
    //   alert(
    //     "نام محصول : " +
    //       product.name +
    //       "\n قیمت محصول: " +
    //       product.price +
    //       " تومان " +
    //       "\n کد محصول : " +
    //       product.id
    //   );
    // });
    // alert("جمع کل قیمت : " + sum + " تومان ");
  } else {
    // alert("محصول مدنظر موجود نمی باشد.");
  }
} else if (userRequest == "2") {
  let userRequest = prompt(
    "نام محصول مدنظر را برای حذف کردن از سبد خرید را وارد کنید : \n "
  );
  let isInShop = userBasket.some(function (product) {
    if (product.name == userRequest) {
      return true;
    }
  });
  if (isInShop == true) {
    let productIndex = userBasket.findIndex(function (product) {
      return product.name === userRequest;
    });
    userBasket.splice(productIndex, 1);
    userBasket.forEach(function (product) {
      // alert(
      //   "نام محصول : " +
      //     product.name +
      //     "\n قیمت محصول: " +
      //     product.price +
      //     " تومان " +
      //     "\n کد محصول : " +
      //     product.id
      // );
    });
  } else if (isInShop == false) {
    // alert("نام محصول وارد شده در سبد کالا موجود نیست.");
  }
}

for (var i = 0; i < allProducts.length; i++) {
  let id_product = allProducts[i].id;
  let name_product = allProducts[i].name;
  let price_product = allProducts[i].price;
  const li_node = document.createElement("li");
  let item = `
  <div class="card">
  <div class="id">${id_product}</div>
  <div class="title">${name_product}</div>
  <div class="price"><span class="price-number">${price_product}</span>&nbsp;<sub>تومان</sub></div>
  </div>
  `;
  li_node.innerHTML = item;
  let item_all_product = document.querySelector(".ul-all-product");
  li_node.setAttribute("class", "item-all-product");
  item_all_product.appendChild(li_node);
}

for (var i = 0; i < userBasket.length; i++) {
  let id_product = userBasket[i].id;
  let name_product = userBasket[i].name;
  let price_product = userBasket[i].price;
  const li_node = document.createElement("li");
  let item = `
  <div class="card">
  <div class="id">${id_product}</div>
  <div class="title">${name_product}</div>
  <div class="price"><span class="price-number">${price_product}</span>&nbsp;<sub>تومان</sub></div>
  </div>
  `;
  li_node.innerHTML = item;
  let ul_user_basket = document.querySelector(".ul-user-basket");
  li_node.setAttribute("class", "item-user-basket");
  ul_user_basket.appendChild(li_node);
}

let s = function () {
  let sum = 0;
  userBasket.forEach(function (product) {
    sum += product.price;
  });

  let off = (10 / 100) * sum;
  let offer = sum - off;

  const li_node = document.createElement("li");
  let item = `
  <div class="card">
    <div class="total-price"> قیمت کل محصولات : </div>
    <div class="total-price-off"> ${offer}&nbsp;<sub class="price-number-off-sub">تومان</sub> </div>
    <div class="total-price-text"><span class="price-number-off">${sum}</span>&nbsp;<sub class="price-number-off-sub">تومان</sub></div>
  </div>
`;

  li_node.innerHTML = item;
  let ul_user_basket = document.querySelector(".ul-user-basket");
  li_node.setAttribute("class", "item-user-basket-off");
  ul_user_basket.appendChild(li_node);
};

s();
