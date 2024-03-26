let age =25
let date_of_birth= Number("30a")

// you can convert string to number datatype by defining the datatype but if u add a string say "12abs" it will return as nan= not a number and for null it will return 0 so be aware of the same

console.log(typeof(date_of_birth));
console.log(date_of_birth); //returns Nan

//same for boolean conversion
 let isBoolean=2 // 1 will return true, 0 will return false 
 isBooleanTrue= Boolean(isBoolean)
 //empty string "" returns false "sss" returns true
 console.log(isBooleanTrue);