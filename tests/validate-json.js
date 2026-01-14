const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../data");

let hasError = false;

fs.readdirSync(dataDir).forEach(file => {
  if (file.endsWith(".json")) {
    try {
      JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
      console.log(`✅ ${file} valide`);
    } catch (err) {
      console.error(`❌ ${file} invalide`);
      hasError = true;
    }
  }
});

if (hasError) {
  process.exit(1);
}
