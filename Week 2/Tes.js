
for (bintang = 0; bintang < 5; bintang += 1) {
    console.log('*')
}

console.log('<<<<<<<===========>>>>>>>>')

for (baris = 0; baris <= 5; baris++) {
    var bintang = ''

    for (var kolom = 0; kolom < baris; kolom++) {
        bintang += '*'
    }
}
console.log(bintang)

console.log('<<<<<<<<<<==========>>>>>>>>>')

var result = '' ;
for (var counter = 0 ; counter < 5 ; counter++ ){
    result = result + '*'
    console.log( result)
}
