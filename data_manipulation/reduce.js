// Syntax

// Array.reduce(function (accumulator, currentValue, index, array) {
//     // reducer function
//     // return nilai accumulator baru
// }, initialValue);

// =====> contoh 1 (penjumlahan semua elemen array)

// const numbers = [1, 2, 3, 4, 5];

// const jumlahAngka = numbers.reduce(function (acc, curr) {
//     return acc + curr;
// }, 0)

// // console.log(jumlahAngka);

// // =====> contoh 2 (mencari nilai terbesar)

// const numbers2 = [10, 3, -2, 1, 22, 11, -22];

// const maxNumber = numbers2.reduce((acc, curr) => {
//     return Math.max(acc, curr);
// }, numbers2[0]);

// console.log(maxNumber);

// contoh menghitung total belanja
const keranjangBelanja = [
  { nama: "Laptop", harga: 12000000, jumlah: 1 },
  { nama: "Mouse", harga: 100000, jumlah: 2 },
  { nama: "Keyboard", harga: 200000, jumlah: 1 },
];

const totalBelanja = keranjangBelanja.reduce(function (acc, curr) {
  return acc + curr.harga * curr.jumlah;
}, 0);

console.log(totalBelanja);
