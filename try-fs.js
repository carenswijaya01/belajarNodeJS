/** import file system from core module */
const fs = require("fs");

/** menuliskan string ke file (synchronus) */
try {
  fs.writeFileSync("data/test.txt", "Hello World Synchronus");
} catch (error) {
  console.log(error);
}

/** menuliskan string ke file (asynchronus) */
fs.writeFile("data/test.txt", "Hello World Asynchronus", (err) => {
  console.log(err);
});

/** membaca isi file (synchronus) */
const isiData = fs.readFileSync("data/test.txt", "utf-8");
console.log(isiData);

/** membaca isi file (asynchronus) */
fs.readFile("data/test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
