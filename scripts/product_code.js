

function parsePartCode(supplierString){
    

    let firstNumber = supplierString.substring(0,supplierString.indexOf(':'))
    let secondNumber =supplierString.substring(supplierString.indexOf(':')+1,supplierString.indexOf('-'))
    let size = supplierString.substring(supplierString.indexOf('-')+1)
    
   
   return  {
    supplierCode: firstNumber,
    productNumber:secondNumber,
    size:size
}
   
}
let partCode1 = 'XYZ:4556-Large'
let partCode2 = 'ASD:12342-Medium'

let part1 = parsePartCode(partCode1)
console.log(("Supplier: " + part1.supplierCode +
" Product Number: " + part1.productNumber +
" Size: " + part1.size))

let part2 = parsePartCode(partCode2)
console.log(("Supplier: " + part2.supplierCode +
" Product Number: " + part2.productNumber +
" Size: " + part2.size))