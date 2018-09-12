function angkaPrima(prima) {
    // you can only write your code here!
    var result = true;
    for(var i = 2; i < prima; i++) {
      if (prima%i===0) result = false;
    }
    return result;
  }
  
  // // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false