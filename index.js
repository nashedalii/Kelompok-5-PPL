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
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

// Fungsi utama program
async function main() {
    while (true) {
        const pilihan = await getInput("\nPilih operasi (0-12): ");

        if (pilihan === '0') {
            console.log("Terima kasih telah menggunakan kalkulator ini!");
            rl.close();
            break;
        }

        let angka1, angka2, hasil;

        switch (pilihan) {
            case '1':
                angka1 = parseFloat(await getInput("Masukkan angka pertama: "));
                angka2 = parseFloat(await getInput("Masukkan angka kedua: "));
                hasil = tambah(angka1, angka2);
                console.log(Hasil: ${angka1} + ${angka2} = ${hasil});
                break;
            case '2':
                angka1 = parseFloat(await getInput("Masukkan angka pertama: "));
                angka2 = parseFloat(await getInput("Masukkan angka kedua: "));
                hasil = kurang(angka1, angka2);
                console.log(Hasil: ${angka1} - ${angka2} = ${hasil});
                break;
            case '3':
                angka1 = parseFloat(await getInput("Masukkan angka pertama: "));
                angka2 = parseFloat(await getInput("Masukkan angka kedua: "));
                hasil = kali(angka1, angka2);
                console.log(Hasil: ${angka1} × ${angka2} = ${hasil});
                break;
            case '4':
                angka1 = parseFloat(await getInput("Masukkan angka pertama: "));
                angka2 = parseFloat(await getInput("Masukkan angka kedua: "));
                hasil = bagi(angka1, angka2);
                console.log(Hasil: ${angka1} ÷ ${angka2} = ${hasil});
                break;
            case '5':
                angka1 = parseFloat(await getInput("Masukkan angka basis: "));
                angka2 = parseFloat(await getInput("Masukkan eksponen: "));
                hasil = pangkat(angka1, angka2);
                console.log(Hasil: ${angka1} ^ ${angka2} = ${hasil});
                break;
            case '6':
                angka1 = parseInt(await getInput("Masukkan angka untuk faktorial: "));
                hasil = faktorial(angka1);
                console.log(Hasil: ${angka1}! = ${hasil});
                break;
            case '7':
                angka1 = parseInt(await getInput("Masukkan angka untuk dicek: "));
                hasil = isPrima(angka1);
                console.log(${angka1} ${hasil ? 'adalah' : 'bukan'} bilangan prima);
                break;
            case '8':
                angka1 = parseFloat(await getInput("Masukkan angka pertama: "));
                angka2 = parseFloat(await getInput("Masukkan angka kedua: "));
                hasil = modulus(angka1, angka2);
                console.log(Hasil: ${angka1} mod ${angka2} = ${hasil});
                break;
            case '9':
                angka1 = parseFloat(await getInput("Masukkan angka: "));
                hasil = absolut(angka1);
                console.log(Nilai absolut |${angka1}| = ${hasil});
                break;
            case '10':
                angka1 = parseFloat(await getInput("Masukkan angka pertama: "));
                angka2 = parseFloat(await getInput("Masukkan angka kedua: "));
                hasil = maksimum(angka1, angka2);
                console.log(Nilai maksimum dari ${angka1} dan ${angka2} adalah ${hasil});
                break;
            case '11':
                angka1 = parseFloat(await getInput("Masukkan angka pertama: "));
                angka2 = parseFloat(await getInput("Masukkan angka kedua: "));
                hasil = minimum(angka1, angka2);
                console.log(Nilai minimum dari ${angka1} dan ${angka2} adalah ${hasil});
                break;
            case '12':
                angka1 = parseFloat(await getInput("Masukkan angka desimal: "));
                hasil = bulatkan(angka1);
                console.log(Pembulatan dari ${angka1} adalah ${hasil});
                break;
            default:
                console.log("Pilihan tidak valid!");
        }
    }
}

// Menjalankan program
main();
