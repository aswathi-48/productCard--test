

let addBtn = document.getElementById('addBtn');
let viewBtn = document.getElementById('viewBtn');

addBtn.addEventListener('click' ,()=> {
    window.location.href = '../pages/addProducts.html'
});

viewBtn.addEventListener('click', ()=> {
    window.location.href = './pages/displayProducts.html'
});