// Tugas Nomoer 1

function shoutOut() {
  console.log("halo function!");
}

shoutOut();

console.log('<<<<<<<<<<<<<<<<<================>>>>>>>>>>>>>>>>>>')

var fungsiPerkalian = function(angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua
}

console.log(fungsiPerkalian(5,6))

console.log('<<<<<<<<<<<<<<<<<================>>>>>>>>>>>>>>>>>>')

// var name = "Agus";
// var age = 30;
// var address = "Jln. Malioboro, Yogjakarta";
// var hobby = "gaming";

// var fullSentence = processSentence(name,age,address,hobby);
//   return name,age,address,hobby
// console.log(fullSentence(name,age,addres,hobby)); 

function tampilkanAngka(angka = 1) {
  return angka
}

console.log(tampilkanAngka('Nama Saya Agus')) 
console.log(tampilkanAngka('umur saya 30 tahun')) 
console.log(tampilkanAngka('alamat saya di Jln. Malioboro, Yogjakarta'))
console.log(tampilkanAngka('dan saya punya hobby yaitu gaming!'))
