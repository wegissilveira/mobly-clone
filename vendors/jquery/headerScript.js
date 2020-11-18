const cartStorage = JSON.parse(localStorage.getItem('cart'))

$(`<p>${cartStorage.length}</p>`).insertAfter('.flaticon-shopping-cart-1')