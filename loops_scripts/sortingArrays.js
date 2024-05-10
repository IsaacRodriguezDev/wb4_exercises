// let listOfNames = ['Eric', 'Alec', 'Italy', 'Daniel','Isaac']
// console.log(listOfNames)

// listOfNames.sort()
// console.log(listOfNames.sort())

// function compareAscendingNumber(a, b) {
//     if (a < b) return -1; // right order
//     else if (a == b) return 0; // same values
//     else return 1; // swap, wrong order
//    }
   //shortened function for sorting numbers
  function compareFnShortened(a, b) {
    return b-a
  }
   let numbers = [3, 27, 400, 1, 111, 5];
   numbers.sort(compareFnShortened);
   console.log(numbers)