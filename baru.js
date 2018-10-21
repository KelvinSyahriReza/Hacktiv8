// [INSTRUKSI]
// * Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. 
//   Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, 
//   perempuan tersebut membuat sebuah program.
// * Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
// * Apabila jumlah true dalam array lebih besar dari jumlah false, 
//   maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
// * Jika jumlah true dan false sama, maka function akan me-return "GALAU".
//   Mudah bukan? :)
// [RULE]
// - Wajib menuliskan pseudocode. Tidak ada pseudocode / 
//   pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi 
//   dan tidak akan dinilai.
// - Dilarang menggunakan Regex (.match, .test, dan sebagainya)
// - Dilarang menggunakan method .filter, atau .reduce!
// */

function loveMeNot(decisions) {
  // Code here
  var totalTrue = 0;
  var totalFalse = 0
  for (i = 0; i < decisions.length; i++) {
    if (decisions[i] === true)
      totalTrue += 1
    if (decisions[i] === false)
      totalFalse +=1 
  }
      if ( totalTrue < totalFalse){
       return ('He does Not Love Me ')
    } 
      if  ( totalTrue > totalFalse ){
      return ('He love me')
      }

      if ( totalTrue === totalFalse){
        return ('Galau')
      }
    // if ( totalTrue > totalFalse){
    //   console.log(decisions[i] + ' = He love me')
    // }
  
  // console.log('totalTrue', totalTrue);
  // console.log('totalFalse', totalFalse);
  

return 
  
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("