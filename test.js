const { sum } = require('./index');
function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ ${message}`);
  }
}
assertEqual(sum(2, 3), 5, "2 + 3 should equal 5");
assertEqual(sum(-1, 1), 0, "-1 + 1 should equal 0");
console.log("All tests passed!");
