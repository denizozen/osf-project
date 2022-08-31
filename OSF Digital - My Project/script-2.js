let shopDesk = document.getElementById('shop');

let shopItemsData = [{
    id: "product01",
    desc: "Kristina Dam Oak Table With White Marble Top",
    price: "$ 799.55",
    img: "images/product-1.png"
  },
  {
    id: "product03",
    desc: "Activate Facial Mask and Charcoal Soap",
    price: "$ 129.55",
    img: "images/product-3.png"
  },
  {
    id: "product04",
    desc: "Cocktail Table Walnut <br> |YES",
    price: "$ 299.99",
    img: "images/product-4.png"
  },
  {
    id: "product05",
    desc: "Hay - About A Lounge Chair AAL 93",
    price: "$ 659.55",
    img: "images/product-5.png"
  },
  {
    id: "product06",
    desc: "TORY DESK <br> CALENDAR",
    price: "$ 410.99",
    img: "images/product-6.png"
  },
  {
    id: "product07",
    desc: "CH445 Wing Chair on SUITE NY",
    price: "$ 330.55",
    img: "images/product-7.png"
  }
];

let basket = JSON.parse(localStorage.getItem("dataCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("dataWish")) || [];

let generateShop = () => {
  return (shopDesk.innerHTML += shopItemsData.map((x) => {
    let {
      id,
      desc,
      price,
      img
    } = x;
    let searchCart = basket.find((x) => x.id === id) || [];
    let searchWish = wishlist.find((x) => x.id === id) || [];
    return `
      <div id="product-id-${id}" class="popular-product" style="position: relative;">
      <div class="buttons-product">
      <div id="cart${id}" class="quantity" style="display: none;">
      ${searchCart.item === undefined? 0: searchCart.item}</div>
      <div id="wish${id}" class="quantity" style="display: none;">
      ${searchWish.item === undefined? 0: searchWish.item}} </div>
      <button onclick="incrementWish(wish${id})" class="wishButton"><img width=80% src="images/wishlist-button.png" alt=""> </button>
      <button onclick="incrementCart(cart${id})" class="cartButton"><img width= 60% src="images/cart-button.png" alt=""> </button>
      </div>
        <div class="pop-pro-img">
          <img width="100%" src="${img}" alt="Product Image">
        </div>
      <div width= 100% class="pop-pro-text">
        <p style="color: black; opacity: 0.7;">${desc}</p>
        <p style="color: #1a2b53;">${price}</p>
      </div>
    </div>`;
  }).join(""));
};

generateShop();

shopDesk.innerHTML += `
              <div class="popular-product">
                <div class="pop-pro-img" style="margin-left: 5%;">
                  <img width= "100%" src="images/product-8.png" alt="Product Image">
                </div>
              </div>`;

let products = [{
    id: "product08",
    desc: "Activate Facial Mask and Charcoal Soap Mask",
    price: "$ 129.5",
    img: "images/product-9.png"
  },
  {
    id: "product09",
    desc: "Vitra Cork Stool B, Cork - Design Within Reach",
    price: "$ 299.99",
    img: "images/product-10.png"
  },
  {
    id: "product10",
    desc: "EAMES x Cast + Crew - Custom Powder Coated",
    price: "$ 330.55",
    img: "images/product-11.png"
  },
  {
    id: "product11",
    desc: "Kristina Dam Oak Table With White Marble Top",
    price: "$ 219.5",
    img: "images/product-12.png"
  }
];

let lastRow = document.getElementById('load-more-content');
const btn = document.getElementById('load-more');

let generateLoadMore = () => {
  return (lastRow.innerHTML += products.map((x) => {
    let {
      id,
      desc,
      price,
      img
    } = x;
    let searchCart = basket.find((x) => x.id === id) || [];
    let searchWish = wishlist.find((x) => x.id === id) || [];
    return `
      <div id="product-id-${id}" class="popular-product" style="position: relative;">
      <div class="buttons-product">
      <div id= "cart${id}" class="quantity" style="display: none;">
      ${searchCart.item === undefined? 0: searchCart.item} </div>
      <div id= "wish${id}" class="quantity" style="display: none;">
      ${searchWish.item === undefined? 0: searchWish.item}} </div>
        <button onclick="incrementWish(wish${id})" class="wishButton"><img width=80% src="images/wishlist-button.png" alt=""> </button>
        <button onclick="incrementCart(cart${id})" class="cartButton"><img width= 60% src="images/cart-button.png" alt=""> </button>
      </div>
        <div class="pop-pro-img">
          <img width="100%" src="${img}" alt="Product Image">
        </div>
      <div width= 100% class="pop-pro-text">
        <p style="color: black; opacity: 0.7;">${desc}</p>
        <p style="color: #1a2b53;">${price}</p>
      </div>
    </div>`;
  }).join(""));
};

function buttonHandler() {
  generateLoadMore();
  btn.removeEventListener('click', buttonHandler, false);
}

btn.addEventListener('click', buttonHandler);

let incrementWish = (id) => {
  let selectedItem = id;
  let search = wishlist.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    wishlist.push({
      id: selectedItem.id,
      item: 1
    });
  }
  localStorage.setItem("dataWish", JSON.stringify(wishlist));
  updateWish(selectedItem.id);
};

let updateWish = (id) => {
  let search = wishlist.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculationWish();
};

let calculationWish = () => {
  let cartIcon = document.getElementById("wishAmount");
  cartIcon.innerHTML = wishlist.map((x) => x.item).reduce((x, y) => x + y, 0);
}

let incrementCart = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("dataCart", JSON.stringify(basket));
  update(selectedItem.id);
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculationCart();
};

let calculationCart = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}
calculationCart();
calculationWish();
