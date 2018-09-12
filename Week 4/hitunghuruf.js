function hitungHuruf(kata) {
    // you can only write your code here!
    var kataSplit = kata.split(' ');
    //console.log(kataSplit); //membagi kalimat menjadi kata
    var banding = 0;
    var kataFinal = '';
    
    for(var i = 0; i < kataSplit.length; i ++) {
      //melooping kata
      //console.log('i for ' + kataSplit[i]); 
      kataFinal = kataSplit[i];
      var huruf = 0;
      for(var j = 0; j < kataSplit[i].length; j++) {
        //melooping huruf
        //console.log('j for ' + kataSplit[i][j]);
        var arrHuruf = kataFinal[j];
        //console.log(j,arrHuruf);
        for(var k = 0; k < kataFinal.length; k++) { 
          //melooping huruf yang sama
          //console.log('k for ' + kataSplit[i][k]);
          //console.log(kataFinal[k]);
          if((j !== k) && (arrHuruf === kataFinal[k])) { 
            //menentukan jumlah huruf yang sama
            huruf++;
            //console.log(huruf);
          }
        }
      }
      if(huruf > banding) { 
        //menentukan kata pertama yang diambil dari jumlah huruf yang sama
        banding = huruf;
        kataSplit = kataFinal;
        console.log(kataFinal);
        
        
      }
    }
    if (banding > 0) {
        return kataSplit;
    }
    else {
      return -1;
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // dan