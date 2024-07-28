const getProductAPI= async function (){
  const card=document.getElementById("product-list");
  // console.log(card)
  let htmlString=``;

    // console.log(123)
    const response = await axios.get('https://shop.cyberlearn.vn/api/Product'); //dòng này để lấy api về product

  console.log(response)
  const datas=response.data.content; //dòng này lấy ra mãng dữ liệu từ trong những object của content 
  console.log(datas)
  datas.map(function(data){
    htmlString += `<div class="item">
                    <img src="${data.image}" alt="...">
                    <h1>${data.name}</h1>
                    <a href="">short description...</a>
                    <div class="item_bot">
                        <button>Buy now</button>
                        <p>${data.price}$</p>
                    </div>
                    </div>`
  })
  console.log(datas)
  // console.log(htmlString)
  card.innerHTML = htmlString;
}
getProductAPI();

