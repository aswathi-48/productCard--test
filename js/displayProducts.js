

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
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <p>Stock: ${product.quantity}</p>
                </div>
                
                <div class="actions">
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </div>    
            </div>

            `  
    });

}

displayProducts();


function deleteProduct(id) {

    allProducts = allProducts.filter((product) => {
        return product.id !== id;

    });

    localStorage.setItem('products', JSON.stringify(allProducts));
    
    setTimeout(() => {
        alert("Item Removed")   
    }, 200);

    displayProducts();
}


function editProduct() {
    window.location.href = `edit.html?id=${id}`;
}