function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Carens",
  umur: 20,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat!");
  }
}

/** Cara Export 1 */
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

/** Cara Export 2 */
// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

/** Cara Export 3 */
module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};
