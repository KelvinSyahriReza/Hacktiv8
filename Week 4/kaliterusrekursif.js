function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka.toString().length === 1) {
      return angka;
    } else {
      var depan = angka.toString()[0];
      var belakang = angka.toString().slice(1);
  
      return kaliTerusRekursif(Number(depan) * kaliTerusRekursif(Number(belakang)));
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6