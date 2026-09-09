const fs = require("fs");
const path = require("path");

const presets = [".php-cs-fixer.php","phpstan.neon"];
const defaultPreset = ".php-cs-fixer.php";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/php-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
