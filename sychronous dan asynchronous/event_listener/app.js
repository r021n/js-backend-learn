const tombol = document.querySelector('#tombol_saya');
const pesan = document.querySelector('#pesan');

tombol.addEventListener('click', () => {
    pesan.innerHTML = "tombol ditekan";
    console.log("Tombol di klik");
})

console.log("End program");