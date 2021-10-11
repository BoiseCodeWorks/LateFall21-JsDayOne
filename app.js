console.log('hello monday from the app.js')

// Declaration
var x = 1
var X = 'something different'
let $dolladollabill = 2.00
let _private = 'secret'
let number2 = 2
let $50cent = 'wheres my money'


let y = 'one'

const z = true

// Assignment
x++
x += 10
x = x + 10
++x
x *= 2
x = 'ten'

function add(){
  // Assignment
  y = 'y in the function'
 console.log(x);
}

add()

console.log(y);

// Primitive types
// Value Types (don't retain relationship )
let number = -0.085
let string = 'hello monday'
let boolean = false

let notDefined = undefined
let noValue = null


// Reference Types (retain relationship)
// Array store data by their position or INDEX
let array = ['a', 2, false]
console.log('access array data', array[1]);


// Objects store their data by KEY/PROPERTY and VALUE ( key : value )
let object = {a: 'a',  c:false, b: 2}
console.log('access object data', object['b'], object.b);

// PEMDAS
// ITS MATH YO
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction
let pemdas = (1+2)*Math.pow(2,3)/(3-2) + 7
console.log("it's math yo", pemdas);

// takes in a value then logs wether that value is true or false
function isTrue(value){
  if(value){
    console.log('is true');
    return 'is true'
  } else {
    console.log('is false');
    return 'is false'
  }
}


let sum = 10

// sum += 10
// ++sum pre-operative
// sum++ post-operative

// just operating on sum
sum + 2
// Operating and re-assigning the value
sum += 2

console.log('sum',sum);

let concat = 'str'
concat += 'ing'
concat += 3
console.log('concat', concat);
// concat through string method
// concat.concat('ing')

let interpolate = `this is interpolation ${isTrue(10)}`
console.log('interpolation', interpolate);


if(true == true){
  // do this
}else if( 3 == x){
  // does something else
}else if( 4 == x){
  // does something else
} if( 5 == x){
  // does something else
} else {
  // does another thing
}

let switchValue = 10

switch(switchValue){
   case 0:
     // do this
      console.log('its a zero');
      break;
    case 12:
      // do this instead
      console.log('its a twelve');
      break;
     case 5:
      console.log('its a two');
      break;
    default:
      // if none of the others run, do this instead
      console.log('its a none of the above');
      break;
}



// Here the function is defined, or "saved for later"
function addTheNumbers(num1, num2){
  let sum = num1 + num2
  console.log('add the numbers', num1 + num2);
  return sum
}

// here is where the function is actually ran, "executed", "called", "invoked"
let answer = addTheNumbers(2, 5)
console.log('answer', answer);








