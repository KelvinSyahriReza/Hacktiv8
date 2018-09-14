function changeMe(arr) {
    var result = ""
    if (arr.length <1){
        console.log(result)
    } else {
        for (var i = 0; i < arr.length; i++) {
            var obj = {};
            var age = 2018 - arr[i][arr[i].length -1];
            obj.firstName = arr[i][0];
            obj.lastName = arr[i][1];
            obj.gender = arr[i][2];
            if (!age || 2018 < arr[i][arr[i].length - 1]) {
                obj.age = 'Invalid Birth Year';
            } else {
                obj.age = age;
              } 
          var hasil = (i+1) + "." + " " + arr[i][0] + " " + arr[i][1] + ":" 
          console.log(hasil)
          console.log(obj);
        }
      
    }
  }
  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
  
  