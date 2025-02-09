const fs = require('fs');

console.log("Mulai membaca file");

fs.readFile('simple.txt', "utf-8", (err, data) => {
    if (err) {
        console.log("Error ketika membaca file");
        return;
    }
    console.log("isi file");
    console.log(data);
})

console.log("selesai membaca file");