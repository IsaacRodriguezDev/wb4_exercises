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
 
   for(let i = 0; i<products.length;i++){

    if(products[i].price <4.00){
        console.log(`Candies that cost less than $4.00 are : ${products[i].product}`)
    }
    if(products[i].product.indexOf('M&M') !== -1){
        console.log(`Candies that have M&M in their name are : ${products[i].product}`)
    }
    if(products[i].product ==='Swedish Fish'){
        console.log(`Yes there is stock of : ${products[i].product}`)
    }
   }