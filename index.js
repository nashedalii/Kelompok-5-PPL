const readline = require('readline');
const {
    tambah,
    kurang,
    kali,
    bagi,
    pangkat,
    faktorial,
    isPrima,
    modulus,
    absolut,
    maksimum,
    minimum,
    bulatkan
} = require('./solution');

// Membuat interface untuk input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menampilkan menu
console.log("=== Program Kalkulator Sederhana ===");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
console.log("5. Pangkat");
console.log("6. Faktorial");
console.log("7. Cek Bilangan Prima");
console.log("8. Modulus");
console.log("9. Nilai Absolut");
console.log("10. Nilai Maksimum");
console.log("11. Nilai Minimum");
console.log("12. Pembulatan");
console.log("0. Keluar");

// Fungsi untuk mendapatkan input
function getInput(prompt) {
