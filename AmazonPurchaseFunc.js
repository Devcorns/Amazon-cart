user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: []
} 

init();

function addItem(val) {
    user.cart.push(val);
}

function showCart() {
    user.cart.forEach(items => {
        console.log(items)
    });
}

function emptyCart() {
    user.cart = [];
}

function purchaseItems() {
    user.purchases = [...user.cart];
    function applyTax() {
        // console.log("from apply tax",user.purchases)
        user.purchases.forEach(element => {
            
            console.log("all purchase products",element)    
        });
    }
    applyTax();
    user.cart = [];
}

function showPurchases() {
    if(user.purchases.length==0) console.log("Purchase cart is empty Fill it now!!!");
    user.purchases.forEach(items => {
        console.log(items)
    });
}

function totalAmt() {
    let totalPrice = 0;
    user.purchases.forEach(element => {

        totalPrice = totalPrice + element.price;
        
    });
    totalPrice =totalPrice + (totalPrice*3)/100;
    console.log("Total price of all products",totalPrice);
}

function sentToCart() {
    user.cart = [...user.purchases];
    user.purchases = [];
}

function init() {
    cProd = {
        name: "Deo 1",
        price:200,
        id:1,
        category:"Life & style"
    }
    user.cart.push(cProd);
}


var user;
