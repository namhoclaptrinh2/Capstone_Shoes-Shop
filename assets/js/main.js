const getProductAPI = async function () {
  const card = document.getElementById("product-list");
  // console.log(card)
  let htmlString = ``;

  // console.log(123)
  const response = await axios.get("https://shop.cyberlearn.vn/api/Product"); //dòng này để lấy api về product

  // console.log(response);
  const datas = response.data.content; //dòng này lấy ra mãng dữ liệu từ trong những object của content
  // console.log(datas);
  datas.map(function (data) {
    htmlString += `<div class="item">
                    <img src="${data.image}" alt="...">
                    <h1>${data.name}</h1>
                    <a href="">short description...</a>
                    <div class="item_bot">
                      <button class="buy-now" data-product-id="${data.id}"><a href="./detail.html"/>Buy now</a></button>
                      <p>${data.price}$</p>
                    </div>
    </div>`;
  });
  // console.log(datas);
  // console.log(htmlString)
  card.innerHTML = htmlString;
};
getProductAPI();

const getDetail = async function () {
  const detail = document.getElementById("product-detail");

  const response = await axios.get(
    "https://shop.cyberlearn.vn/api/Product/getbyid?id=1"
  );
  const product = response.data.content;

  const htmlString = `
          <div class="product-detail">
        <div class="container">
          <div class="detail-left">
            <img src="${product.image}" alt="...">
          </div>
          <div class="detail-right">
            <h2 class="prod-name">${product.name}</h2>
            <p class="prod-desc" id="product-description">${product.description}</p>
            <div class="size">
              <h3>Available Sizes</h3>
              <div id="size-buttons">
                ${product.size.map(size => `<button class="btn-size" data-size="${size}">${size}</button>`).join('')}
              </div>
            </div>
            <p class="prod-price" id="product-price">${product.price}$</p>
            <div class="quantity">
              <button class="btn-dec" id="decrease-quantity">-</button>
              <input id="quantity" value="1" min="1">
              <button class="btn-inc" id="increase-quantity">+</button>
            </div>
            <button class="btncart">
              <a href="./cart.html">Add to Cart</a>
            </button>
          </div>
        </div>
      </div>

      `;

  detail.innerHTML = htmlString;
};

getDetail();

document.querySelector('.submit-button').onclick = async function (e) {
  e.preventDefault(); 
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passConfirm = document.getElementById('passConfirm').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const gender = document.querySelector('input[name="gender"]:checked').value === 'male';

  if (password !== passConfirm) {
    console.log('Passwords do not match.');
    return;
  }

  const userData = {
    email: email,
    password: password,
    name: name,
    gender: gender,
    phone: phone,
  };
  console.log('User Data:', userData);

  const response = await fetch('https://shop.cyberlearn.vn/api/Users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();
  console.log('API Response:', result);
};
