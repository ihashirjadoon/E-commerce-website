let items = [
    {
        itemName: "Card",
        itemImage: "itemOne.png",
        itemPrice: "120"
    },
    {
        itemName: "Suzuki Alto",
        itemImage: "itemTwo.png",
        itemPrice: "120000"
    },
    {
        itemName: "Banner",
        itemImage: "itemThree.jpg",
        itemPrice: "5000"
    },
    {
        itemName: "Banner",
        itemImage: "itemFour.png",
        itemPrice: "800"
    },
    {
        itemName: "Ahad",
        itemImage: "itemFour.png",
        itemPrice: "800"
    }
]
let addToCartItems = []
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""
    for (var i = 0; i < items.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="images/${items[i].itemImage}" alt="${items[i].itemName}">
                    </div>
                    <div class="cardContent">
                        <h3>${items[i].itemName}</h3>
                        <p>Rs. ${items[i].itemPrice}/-</p>
                        <button class="btn btn-primary" type="button" onclick="addToCart('${i}')">add to cart</button>
                    </div>
                </div>
            </div>
        `
    }
}
addItems()
cartItemsFetch()
function addToCart(elementId){
    addToCartItems.push(items[elementId])
    cartItemsFetch()
}
function deleteItem(elementId){
    addToCartItems.splice(elementId,1);
    cartItemsFetch()
}
function cartItemsFetch(){
    if(addToCartItems.length == 0){
        document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = `
            <div class="card shadow-3">
                <div class="alert alert-danger w-100 text-center m-0">Your cart is empty!!!</div>
            </div>
        `
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = "none"
    } else {
        let total = 0
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = addToCartItems.length
        document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = ""
        for(var i=0; i<addToCartItems.length; i++){
            document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML += `
            <div class="card shadow cardItem${i}">
            <div class="cardImage">
            <img src="images/${addToCartItems[i].itemImage}" alt="${addToCartItems[i].itemName}">
            </div>
            <div class="cardContent">
            <h3>${addToCartItems[i].itemName}</h3>
            <div class="group">
            <p>Rs. <span>${addToCartItems[i].itemPrice}</span>/-</p>
            <button class="btn btn-danger" type="button" onclick="deleteItem('${i}')"><i class="fas fa-trash"></i></button>
            </div>
                </div>
            </div>
            `
            total+=parseInt(addToCartItems[i].itemPrice)
        }
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = total
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = ""
    }
}
function cartToggler(){
    document.querySelector(".mainContainer .addToCartContainer").classList.toggle("active")
    if(document.querySelector(".mainContainer .addToCartContainer").classList.contains("active")){
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-cart-plus")
    } else {
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-cart-plus")
    }
}