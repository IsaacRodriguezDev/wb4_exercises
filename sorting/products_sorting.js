let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Bears", price: 10.79},
    {product: "Reese's Pieces", price: 4.99},
    {product: "Skittles", price: 1.99},
    {product: "Twix", price: 1.49},
    {product: "Hershey's Kisses", price: 3.29}
   
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   function sortingTitle(a,b){
    
    if (a.product < b.product) {
      return -1;
    } else if (b.product > a.product) {
      return 1;
    }
    // a must be equal to b
    return 0;
}
function sortingTitleDescendingPrice(a,b){
    
   return  b.price-a.price
}
console.log(products.sort(sortingTitle))
console.log('---------------------------------------------------')
console.log(products.sort(sortingTitleDescendingPrice))