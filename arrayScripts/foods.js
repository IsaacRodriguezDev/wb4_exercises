let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ]

let total = 0
let subtotal
let subtotalTax 
let tip = (18/100)
let tax = (8/100)

    for(let i = 0; i < lunch.length;i++){
        total = total + lunch[i].price
       
    }
 tip = tip*total
 tax = tax*total

subtotal = total+tip+tax


    console.log(`The total with no tax: $${total}`)
    console.log(`8% tax is: $${(tax).toFixed(2)}`)
    console.log(`18% tip is: $${(tip).toFixed(2)}`)
    console.log(`The subtotal is: $${(subtotal).toFixed(2)}`)
    