const fs = require("fs");

function readFileAsync(pathFile, callback) {
    fs.readFile(pathFile, "utf-8", function (err, data) {
        if (err) {
            console.log("Error, terjadi kesalahan saat membaca data. ", err);
            callback(err);
            return;
        }

        console.log("File berhasil dibaca.");
        callback(null, data);
    })
}

readFileAsync("data.txt", function (err, data) {
    if (err) {
        console.log("Terjadi kesalahan saat membaca file ", err);
    } else {
        console.log("data berhasil dibaca.\n");
        console.log(data);
    }
})

console.log("mulai membaca file...");