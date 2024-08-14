const products = [
    { name: "Milk", price: 15 },
    { name: "Water", price: 9 },
    { name: "Bread", price: 5 },
    { name: "Eggs", price: 12 },
    { name: "Butter", price: 8 },
    { name: "Cheese", price: 20 },
    { name: "Apples", price: 7 },
    { name: "Chicken", price: 25 },
    { name: "Rice", price: 10 },
    { name: "Pasta", price: 6 }
]

function getProducts(allProducts, wantedProducts) {
    return allProducts.filter(product => wantedProducts.find(wanted => wanted === product.name) !== undefined)
    // Add code here
}
//  { name: "Chicken", price: 25 }]
console.log(getProducts(products, ["Apples", "Chicken"])) // ---> [ { name: "Apples", price: 7 },






function getCheapProducts(allProducts, wantedPrice) {

    allProducts = allProducts.filter(product => product.price <= 10)
    return allProducts  //lezem retun  ::na3mlo cd es66 wba3ed na3mlo node checkpointES6
    // Add code here
}

console.log(getCheapProducts(products, 10)) // --> Ta3tini products ar5ess men 10
