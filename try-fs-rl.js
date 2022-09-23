/** import file system from core module */
const fs = require("fs");
/** import readline from core module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda: ", (nama) => {
  rl.question("Masukkan no hp anda: ", (noHP) => {
    /** bikin objek contact */
    const contact = { nama, noHP };

    /** baca isi json */
    const file = fs.readFileSync("data/contacts.json", "utf-8");

    /** ubah isi json menjadi array */
    const contacts = JSON.parse(file);

    /** push ke array */
    contacts.push(contact);

    /** overwrite json dengan yg terbaru */
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terima kasih sudah memasukkan data Anda!");
    rl.close();
  });
});
