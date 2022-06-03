// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  return dataBelanjaan.map((data) => {
    return `- ${data.nama} x ${data.kuantitas}`;
  });
}
// const listBelanjaans = (dataBelanjaan) => {
//   for(const data of dataBelanjaan){
//     console.log(`${data.nama}  ${data.kuantitas} x Rp. ${data.harga}`);
//   }
// }
// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// const totalBelanjaan = (dataBelanjaan) => {
//  let total = 0;
//  return dataBelanjaan.map((data) => {
//     total + data.harga * data.kuantitas;
//   },0);
// } out put total belanjaan ,,
  const totalBelanjaan = (dataBelanjaan) => {
    let total = 0;
    return dataBelanjaan.reduce((total, data) => {
      return total + data.harga * data.kuantitas;
    }, total);
  }
// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
