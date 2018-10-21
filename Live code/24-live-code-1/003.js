// Competencies: Loopings
/*
=================
Odd Series
=================
Instruksi
=========
Buatlah sebuah proses pengecekan dengan menggunakan looping (boleh dengan while atau for).
Disediakan variabel max, dimana akan menampilkan deret ganjil dari terbesar ke kecil hingga mencapai angka 1.
Tampilkan deret ganjil sejumlah nilai max.

contoh 1 (max = 4)
31
31
31
31

contoh 2 (max = 5)
531
531
531
531
531

contoh 3 (max = 10)
97531
97531
97531
97531
97531
97531
97531
97531
97531
97531

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
 // isi dengan nilai max!
var angka = 1
while (angka <= 100){
    if (angka % 2 === 0 ){
        console.log(angka + ' - Genap')
    } else if (angka % 2 === 1){
        console.log (angka + ' - Ganjil')
    }
    
    angka ++
}


