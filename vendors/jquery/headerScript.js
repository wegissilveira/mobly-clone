const cartStorage = JSON.parse(localStorage.getItem('shopping_cart'))

$(`<p>${cartStorage !== null ? cartStorage.length : 0}</p>`).insertAfter('.flaticon-shopping-cart-1')