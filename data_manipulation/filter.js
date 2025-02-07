// Filter syntax

// Array.filter(function (currentValue, index, array) {
//     // function for each element
//     // return element
// })

// Example
const produk = [
    { nama: "Laptop", kategori: "Elektronik" },
    { nama: "Buku", kategori: "Alat tulis" },
    { nama: "Mouse", kategori: "Elektronik" },
    { nama: "Pensil", kategori: "Alat tulis" },
];

const kataKunciPencarian = "elektronik";

const produkYangDicari = produk.filter(function (product) {
    return product.kategori.toLocaleLowerCase().includes(kataKunciPencarian.toLocaleLowerCase());
})

console.log(produkYangDicari)