let addBtn = document.getElementById('addBtn');
let viewBtn = document.getElementById('viewBtn');

addBtn.addEventListener('click' , ()=> {
    window.location.href ='./Product-Management-System/pages/addProduct.html'
});

viewBtn.addEventListener('click', ()=> {
    window.location.href ='./Product-Management-System/pages/displayProducts.html'
});