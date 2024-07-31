const getDetail = async function() {
    const detail = document.getElementById("product-detail");

    
        const response = await axios.get("https://shop.cyberlearn.vn/api/Product/getbyid?id=1");
        const product = response.data.content;

        const htmlString = `
            <div class="container product-detail">
    <div class="row">
        <div class="col-md-6 detail-left ">
            <img id="product-image" src="${product.image}" alt="Product Image" class="img-fluid rounded" >
        </div>
        <div class="col-md-6 detail-right">
            <h2 class="prod-name" id="product-name">${product.name}</h2>
            <p class="prod-desc" id="product-description">${product.description}</p>
            <div class="size">
                <h3>Available Sizes</h3>
                <div id="size-buttons" class="d-flex gap-2">
                    ${product.size.map(size => `<button class="btn btn-secondary" data-size="${size}">${size}</button>`).join('')}
                </div>
            </div>
            <p class="prod-price" id="product-price">${product.price}$</p>
            <div class="quantity d-flex align-items-center gap-2">
                <button class="btn btn-primary btn-dec" id="decrease-quantity">-</button>
                <input id="quantity" value="1" min="1" class="form-control text-center" style="width: 60px;">
                <button class="btn btn-primary btn-inc" id="increase-quantity">+</button>
            </div>
            <button class="btn btn-gradient btncart mt-3">
                <a href="./cart.html" class="text-white text-decoration-none">Add to Cart</a>
            </button>
        </div>
    </div>
</div>

        `;

        detail.innerHTML = htmlString;
};

getDetail();
