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

// Fungsi untuk menampilkan menu
function tampilkanMenu() {
  console.log('\n=== KALKULATOR SEDERHANA ===');
  console.log('1. Penjumlahan');
  console.log('2. Pengurangan');
  console.log('3. Perkalian');
  console.log('4. Pembagian');
  console.log('5. Pangkat');
  console.log('6. Faktorial');
  console.log('7. Cek Bilangan Prima');
  console.log('8. Modulus');
  console.log('9. Nilai Absolut');
  console.log('10. Nilai Maksimum');
  console.log('11. Nilai Minimum');
  console.log('12. Pembulatan');
  console.log('0. Keluar');
  console.log('==========================');
}

// Fungsi untuk mendapatkan input dari user
function ambilInput(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
}

// Fungsi utama kalkulator
async function kalkulator() {
  while (true) {
    tampilkanMenu();
    const pilihan = await ambilInput('Pilih operasi (0-12): ');

    if (pilihan === '0') {
      console.log('Terima kasih telah menggunakan kalkulator ini!');
      rl.close();
      break;
    }

    let a, b, hasil;

    switch (pilihan) {
      case '1':
        a = parseFloat(await ambilInput('Masukkan angka pertama: '));
        b = parseFloat(await ambilInput('Masukkan angka kedua: '));
        hasil = tambah(a, b);
        console.log(`Hasil ${a} + ${b} = ${hasil}`);
        break;

      case '2':
        a = parseFloat(await ambilInput('Masukkan angka pertama: '));
        b = parseFloat(await ambilInput('Masukkan angka kedua: '));
        hasil = kurang(a, b);
        console.log(`Hasil ${a} - ${b} = ${hasil}`);
        break;

      case '3':
        a = parseFloat(await ambilInput('Masukkan angka pertama: '));
        b = parseFloat(await ambilInput('Masukkan angka kedua: '));
        hasil = kali(a, b);
        console.log(`Hasil ${a} × ${b} = ${hasil}`);
        break;

      case '4':
        a = parseFloat(await ambilInput('Masukkan angka pertama: '));
        b = parseFloat(await ambilInput('Masukkan angka kedua: '));
        hasil = bagi(a, b);
        console.log(`Hasil ${a} ÷ ${b} = ${hasil}`);
        break;

      case '5':
        a = parseFloat(await ambilInput('Masukkan angka basis: '));
        b = parseFloat(await ambilInput('Masukkan eksponen: '));
        hasil = pangkat(a, b);
        console.log(`Hasil ${a}^${b} = ${hasil}`);
        break;

      case '6':
        a = parseInt(await ambilInput('Masukkan angka untuk faktorial: '));
        hasil = faktorial(a);
        console.log(`Hasil ${a}! = ${hasil}`);
        break;

      case '7':
        a = parseInt(await ambilInput('Masukkan angka untuk dicek: '));
        hasil = isPrima(a);
        console.log(`${a} ${hasil ? 'adalah' : 'bukan'} bilangan prima`);
        break;

      case '8':
        a = parseFloat(await ambilInput('Masukkan angka pertama: '));
        b = parseFloat(await ambilInput('Masukkan angka kedua: '));
        hasil = modulus(a, b);
        console.log(`Hasil ${a} mod ${b} = ${hasil}`);
        break;

      case '9':
        a = parseFloat(await ambilInput('Masukkan angka: '));
        hasil = absolut(a);
        console.log(`Nilai absolut |${a}| = ${hasil}`);
        break;

      case '10':
        a = parseFloat(await ambilInput('Masukkan angka pertama: '));
        b = parseFloat(await ambilInput('Masukkan angka kedua: '));
        hasil = maksimum(a, b);
        console.log(`Nilai maksimum dari ${a} dan ${b} adalah ${hasil}`);
        break;

      case '11':
        a = parseFloat(await ambilInput('Masukkan angka pertama: '));
        b = parseFloat(await ambilInput('Masukkan angka kedua: '));
        hasil = minimum(a, b);
        console.log(`Nilai minimum dari ${a} dan ${b} adalah ${hasil}`);
        break;

      case '12':
        a = parseFloat(await ambilInput('Masukkan angka desimal: '));
        hasil = bulatkan(a);
        console.log(`Pembulatan dari ${a} adalah ${hasil}`);
        break;

      default:
        console.log('Pilihan tidak valid! Silakan pilih 0-12');
    }
  }
}

// Menjalankan kalkulator
kalkulator();