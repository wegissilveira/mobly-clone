const cartStorage = JSON.parse(localStorage.getItem('shopping_cart'))

$(`<p>${cartStorage.length}</p>`).insertAfter('.flaticon-shopping-cart-1')