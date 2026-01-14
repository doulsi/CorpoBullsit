let data = {};

fetch("data/corporate.json")
  .then(res => res.json())
  .then(json => data = json);

function pick(key) {
  return data[key][Math.floor(Math.random() * data[key].length)];
}

function generateSpeech() {
  const blocks = [
    pick("intros"),
    pick("verbs"),
    pick("concepts"),
    pick("buzzwords"),
    pick("conclusions")
  ];

  document.getElementById("output").innerText =
    blocks.join(" ");
}