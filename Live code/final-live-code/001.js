/**
  ************
  TAMBAH DASH
  ************

  Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string.
  Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara
  dua angka ganjil di dalam string yang menjadi parameter tersebut.

  Contoh 1:
  ---------
  input: '1233897'
  output: '123-389-7'

  Contoh 2:
  ---------
  input: '1739028'
  output: '1-7-3-9028'

  RULES:
    - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
    - TIDAK BOLEH MENGGUNAKAN BUILT IN FUNCTION DAN FUNCTION ES6 APAPUN
// 

Input hasil to any value 
Calculate Indeks Looping
If (str % 2 equals 0 && str[i + 1] % 2 == 1 && str[i] !== str.length - 1)

Display Hasil + '-'

**/


function tambahDash(str) {
    // you can only write your code here!
  
    var hasil = '';
    //mencari indeks perulangan yg ada pada str
    for (var i = 0; i < str.length; i++) {
        //membuat sebuah kondisi dimana ganjil akan bertemu ganjil
        if (str[i] % 2 !== 0 && str[i + 1] % 2 == 1 && str[i] !== str.length - 1) {
            

            if (str[i] !== str.length) {
                hasil += str[i] + '-'
            }
            }  else {
          hasil += str[i]
         }
    }
    return hasil;
}
// TEST CASES

console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'
