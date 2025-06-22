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
