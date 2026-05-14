

let productList = document.getElementById('productsList');

let = allProducts = JSON.parse(localStorage.getItem('products')) || [];

function displayProducts() {
    productList.innerHTML = "";

    allProducts.forEach(product => {
        productList.innerHTML = 
            `
            <div class="card">
                <img src="${product.image}" alt="">
                <h3 ${product.name}></h3>
                <p ${product.price}></p>
                <p ${product.category}></p>
                <
            </div>

            `
    });
}