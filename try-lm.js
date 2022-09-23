// const fs = require("fs"); // core module
const coba = require("./local_modules/coba"); // local module
// const moment = require("moment"); // third party module / npm module / node modules

console.log(
  coba.cetakNama("Carens"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
