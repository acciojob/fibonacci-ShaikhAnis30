function fibonacci(num) {
// your code here
	  let x = 0, y = 1, z = x + y;
	  for (let i = 3; i < num; i++) {
	    x = y;
	    y = z;
	    z = x + y;
	  }
	  return z;
}

module.exports = fibonacci;
