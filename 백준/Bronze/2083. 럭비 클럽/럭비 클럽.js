let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const line = input[i];
  if (line === "# 0 0") break;

  const [name, ageStr, weightStr] = line.split(" ");
  const age = Number(ageStr);
  const weight = Number(weightStr);

  const status = age > 17 || weight >= 80 ? "Senior" : "Junior";
  console.log(`${name} ${status}`);
}
