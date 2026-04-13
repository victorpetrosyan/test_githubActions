function sum(a, b) {
  return a + b;
}
if (require.main === module) {
  console.log("App is running...");
}
module.exports = { sum };
