function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []:
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('${name} added to cart ');
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        totalContainer.innerHTML = '';
        return;
    }

    let total = 0;
    
    const listItems = cart.map(item => {
        total += Number(item.price);
        return '<li>${item.name} - $${item.price}</li>';
    }) .join('');
}

function clearCart() {
    localStorage.removeItem('cart')
    displayCart();
}

function sendCartEmail() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    const body = cart.map(i => '${i.name} - $${i.price}').join('%0D50A');
    const subject = 'My Pantry Items';
    const email = 'bradleyvalleylivestock@gmail.com'; 
    window.location.href = 'mailto:${email}?subject=${subject}&body=${body}';
}