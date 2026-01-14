const data = require("../data/corporate.json");

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  return [
    pick(data.intros),
    pick(data.verbs),
    pick(data.concepts),
    pick(data.conclusions)
  ].join(" ");
}

const results = new Set();

for (let i = 0; i < 20; i++) {
  const sentence = generate();
  if (typeof sentence !== "string" || sentence.length < 20) {
    throw new Error("Phrase invalide");
  }
  results.add(sentence);
}

if (results.size < 2) {
  throw new Error("Pas assez de variation");
}

console.log("✅ Générateur OK");
