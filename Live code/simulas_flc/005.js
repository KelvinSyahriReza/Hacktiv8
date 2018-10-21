/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating (penumpang) {
  // your code here
  var obj = {};

  for(var i = 0; i < penumpang.length; i++){
    if(obj[penumpang[i].gerbong] === undefined){
      obj[penumpang[i].gerbong] = []
    }

    if(obj[penumpang[i].gerbong] !== 'VVIP' && obj[penumpang[i].gerbong] !== 'VIP' && obj[penumpang[i].gerbong] !== 'Regular'){
      obj[penumpang[i].gerbong].push({nama : penumpang[i].nama, seat : penumpang[i].seat})
    }
  }
  // console.log(obj)

  // for(var j = 0; j < penumpang.length; j++){
  //   for(var key in penumpang[j]){
  //     if(penumpang[j][key] === "VVIP"){
  //       obj.VVIP.push(penumpang[j].nama)
  //       obj.VVIP.push(penumpang[j].seat)
  //     }else if(penumpang[j][key] === "VIP"){
  //       obj.VIP.push(penumpang[j].nama)
  //       obj.VIP.push(penumpang[j].seat)
  //     }else if(penumpang[j][key] === "Regular"){
  //       obj.Regular.push(penumpang[j].nama)
  //       obj.Regular.push(penumpang[j].seat)
  //     }
  //   }
  // }
  return obj
}


console.log(trainSeating([
  { nama: "Awtian", gerbong: "VVIP", seat: 'A1' },
  { nama: "Klonoa", gerbong: "VIP", seat: 'V1' },
  { nama: "Azizy", gerbong: "VVIP", seat: 'A2' },
  { nama: "Crash", gerbong: "Regular", seat: 'R1' },
  { nama: "Sena", gerbong: "Regular", seat: 'R3' },
  { nama: "Retsu", gerbong: "VIP", seat: 'V2' },
  { nama: "Hiruma", gerbong: "VVIP", seat: 'A666' },
  { nama: "Tsubasa", gerbong: "VIP", seat: 'V6' }
]));
/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' } ]
}
*/
