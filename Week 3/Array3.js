var input = ["0001", "Kelvin Syahri Reza", "Palembang", "30/07/1998", "Games"];
var proses2 = input[3].split('/');
var proses3 = proses2 [1];
var e = proses2;
var a = parseInt(proses2[0])
var b = parseInt(proses2[1])
var c = parseInt(proses2[2])
var d = [a, b, c]


function dataHandling (input){
  input.splice(4,1, "Pria", "Hacktiv8")
  input.splice(0,3, "0001", "Kelvin Syahri Reza", "Jawa Barat")
  console.log(input)
  if (proses3==1){
    console.log('Januari');
  } else if (proses3==2){
    console.log('Februari');
  } else if (proses3==3){
    console.log('Maret');
  }else if (proses3==4){
    console.log('April');
  }else if (proses3==5){
    console.log('Mei');
  }else if (proses3==6){
    console.log('Juni');
  }else if (proses3==7){
    console.log('Juli');
  }else if (proses3==8){
    console.log('Agustus');
  }else if (proses3==9){
    console.log('September');
  }else if (proses3==10){
    console.log('Oktober');
  }else if (proses3==11){
    console.log('Nopember');
  }else if (proses3==12){
    console.log('Desember');
  }
  d.sort(function(a, b){return b-a})
  console.log(d)
  e.sort(function(a, b){return b-a})
  console.log(e.join('-'))
  console.log(input[1].slice(0,15))
}

console.log(dataHandling(input))