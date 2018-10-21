/**

Buatlah sebuah ALGORITMA/PSEUDOCODE untuk kasus berikut:

Seorang anak memiliki uang sejumlah Rp.X (jumlah uang fleksibel)
Dia akan mengunjungi sebuah toko mainan dan akan membeli mainan yang diinginkannya.
Anak ini hanya akan membeli satu mainan saja dan akan membeli harga mainan paling mahal dari uang yang dimilikinya.

Berikut beberapa mainan dan harga yang ada pada daftar anak tersebut:
 - Rubik 3x3 => Rp35.000
 - Tamiya Mini 4wd => Rp185.000
 - Robot Star Wars => Rp350.000

Tampilkan mainan apa yang bisa dibeli oleh anak tersebut dan berapa jumlah kembaliannya.
Jika uang anak tidak mencukupi satupun dari permainan tersebut, maka tampilkan "Nabung lagi ya, dek!"

**/

// YOUR ALGORITMA OR PSEUDOCODE HERE

var uang = 300000
var rubik = 35000
var tamiya = 185000
var robot = 350000

if (uang >= robot  ){
    var hasil = uang - robot
    console.log('Membeli Robot' + ' dengan Sisa Uang = ' + hasil)
}

    else if (uang <= robot){
    }
    console.log ('Maaf uang anda tidak mencukupi !')
   

 