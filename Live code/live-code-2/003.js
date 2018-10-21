/**

Reverse All

Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.

Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []

Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()

*/

function BalikKata (arr) {
    
    var tampung = '';
    for(var i=arr.length-1; i >= 0; i--){
      tampung += arr[i];
    }
    
    return tampung;
  }
  


console.log(BalikKata(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(BalikKata(['kira' + ', ' + 'lawliet' + ', ' + 'near' + ', ' + 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(BalikKata([]));
// []
