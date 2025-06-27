function calcTotal(merchTot) {
  let orderTotal;
  if (merchTot >= 100) {
    orderTotal = merchTot; // No discount
  } else if (merchTot < 50.01) {
    orderTotal = merchTot + 5; // $5 shipping
  } else {
    orderTotal = merchTot + 5 + 0.3 * (merchTot - 50); // $5 shipping + 30% tax on amount over $50
  }
  return "the Total is :" + orderTotal;
}
calcTotal(56.99); // Example usage, you can remove this line later
setTimeout(function () {
  console.log("This is a test message to show the function works! "); // Example usage, you can remove this line later
}),
  1000; // Example usage, you can remove this line later

function domMaths(a, b, callback) {
  const result = callback(a, b);
  console.log(`The result of the operation is: ${result}`);
}

// Example usage, you can remove or modify these lines later
domMaths(5, 6, function (x, y) {
  return x + y; // Example operation, you can change this to any operation
});
domMaths(10, 20, function (x, y) {
  return x * y; // Example operation, you can change this to any operation
});
domMaths(15, 3, function (x, y) {
  return x - y; // Example operation, you can change this to any operation
});
domMaths(15, 3, function (x, y) {
  return x - y; // Example operation, you can change this to any operation
});



//Factorial function
function factorial(n) {
  if (n < 0) return "Factorial is not defined for negative numbers";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // Output: 120


//Tell the time
function tellTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = ` The current time is ${hours}:${minutes}:${seconds}`;
    return timeString;
}
console.log(tellTime());

// Greet user
function greetUser(name) {
    if (!name) {
        return "Hello, Guest!";
    }
    return `Hello, ${name}!`;
}
console.log(greetUser("John")); // Output: Hello, John!
console.log(greetUser()); // Output: Hello, Guest!

//Switch statement example
switch (dayOfWeek) {
    case "sunday":
        console.log("It's Sunday, time to relax!");
        break;
    case "monday":
        console.log("It's Monday, back to work!");
        break;
    case "tuesday":
        console.log("It's Tuesday, keep going!");
        break;
    case "wednesday":
        console.log("It's Wednesday, we're halfway through the week!");
        break;
    case "thursday":
        console.log("It's Thursday, almost the weekend!");
        break;
    case "friday":
        console.log("It's Friday, the weekend is near!");
        break;
    case "saturday":
        console.log("It's Saturday, enjoy your day!");
        break; 
    default:
        console.log("Invalid day of the week.");
        break;
}   

//Triangle using for loop
function drawTriangle(height) {
    let triangle = "";
    for (let i = 1; i <= height; i++) {
        triangle += "*".repeat(i) + "\n";
    }
    return triangle;
}
console.log(drawTriangle(5)); // Output: *
//  *
//   *
//    *
//     *

//Triangle using while loop
function drawTriangleWhile(height) {
    let triangle = "";
    let i = 1;
    while (i <= height) {
        triangle += "*".repeat(i) + "\n";
        i++;
    }
    return triangle;
}

//triangle using do-while loop
function drawTriangleDoWhile(height) {
    let triangle = "";
    let i = 1;
    do {
        triangle += "*".repeat(i) + "\n";
        i++;
    } while (i <= height);
    return triangle;
}
console.log(drawTriangleWhile(5)); // Output: *

//trangle using nested for loop
function drawNestedTriangle(height) {
    let triangle = "";
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += "*";
        }
        triangle += "\n";
    }
    return triangle;
}
console.log(drawNestedTriangle(5)); // Output: *


//Triangle using nested while loop
function drawNestedTriangleWhile(height) {
    let triangle = "";
    let i = 1;
    while (i <= height) {
        let j = 1;
        while (j <= i) {
            triangle += "*";
            j++;
        }
        triangle += "\n";
        i++;
    }
    return triangle;
}
console.log(drawNestedTriangleWhile(5)); // Output: *

//Triangle using do-while loop
function drawTriangleDoWhile(height) {
    let triangle = "";
    let i = 1;
    do {
        triangle += "*".repeat(i) + "\n";
        i++;
    } while (i <= height);
    return triangle;
}
console.log(drawTriangleDoWhile(5)); // Output: *

//Triangle using nested do-while loop
function drawNestedTriangleDoWhile(height) {
    let triangle = "";
    let i = 1;
    do {
        let j = 1;
        do {
            triangle += "*";
            j++;
        } while (j <= i);
        triangle += "\n";
        i++;
    } while (i <= height);
    return triangle;
}
console.log(drawNestedTriangleDoWhile(5)); // Output: *