

let productList = document.getElementById('productsList');

let allProducts = JSON.parse(localStorage.getItem('products')) || [];

function displayProducts() {
    productList.innerHTML = "";

    allProducts.forEach(product => {
        productList.innerHTML += 
            `
            <div class="card">
                <div class="image-section">
                    <img src="${product.image}" alt="">
                </div>
                
                <div class="content-section">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <p>${product.category}</p>
                    <p>${product.quantity}</p>
                    <p>${product.description}</p>
                </div>
                
                <div class="actions">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>    
            </div>

            `
    displayProducts();
            
    });
}