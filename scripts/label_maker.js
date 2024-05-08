
let myInfo = {
    name:'Kate Foyard',
    address: '1234 Main Street',
    city: 'Dallas',
    state: 'Texas',
    zip: 12345
}
function printContact(info){
   
    console.log(`
    ${info.name}
    ${info.address}
    ${info.city},${info.state} ${info.zip}
    `)
}
printContact(myInfo)