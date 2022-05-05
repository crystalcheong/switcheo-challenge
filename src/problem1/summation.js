var sum_to_n_a = function (n) {
  return n > 0 ? n + sum_to_n_a(n - 1) : n;
};

var sum_to_n_b = function (n) {
  if (n > 0) {
    var sum = 0;
    for (var i = 0; i <= n; i++) sum += i;
    return sum;
  }
  return n;
};

var sum_to_n_c = function (n) {
  if (n > 0) {
    var sum = 0;
    while (n > 0) sum += n--;
    return sum;
  }
  return n;
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter n: ", (val) => {
  console.log(`Recursive: ${sum_to_n_a(~~val)}`);
  console.log(`For-iteration: ${sum_to_n_b(~~val)}`);
  console.log(`While-iteration: ${sum_to_n_c(~~val)}`);
  readline.close();
});