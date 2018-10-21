/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
  
*/

// // Algoritma

//       Start 
//         |
//         V

//       Input
//         |
//         V

//     If angka tidak
//    ada pasangan Maka 
//   ambil angka paling
//         awal
//          |
//          |
//          V

//          --------------------
//          |                  |
//          |                  |
//          V                  V 

//        Ganjil             Ganjil 
//          |                  |
//          |                  |
//          V                  V
//    Input pasangan     Input pasangan
//      dijumlahkan     tidak dijumlahkan
//           |                 |
//           |                 |
//           --------  ---------
//                   ||
//                   ||
//                   VV

//                 Selesai


//  
function evenPairsSum(str) {
  // Code disini
  var jumlah = 0
  var result = []
  for (var i = 0; i < str.length; i = i + 2) {
    if (i == str.length - 1) {
      result.push(str[i] + str[0])
    } else {
      result.push(str[i] + str[i + 1])
    }

  }

  for (var j = 0; j < result.length; j++) {
    if (Number(result[j] % 2 === 0)) {
      jumlah = jumlah + Number(result[j])
    }
  }

  return jumlah
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
