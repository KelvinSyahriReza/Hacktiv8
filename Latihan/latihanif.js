var nama = 'Kelvin' ;
var peran = 'Penyihir' ;


if (nama === ''){
    console.log('Nama Harus di isi !!!')
} else if(peran === '')
    console.log('Hallo ' + nama + ', Pilih peranmu untuk memulai game')

if (peran === 'Ksatria'){
    console.log('Hallo Ksatria ' + nama + ', Kamu dapat menyerang dengan senjatamu')
}

if (peran === 'Tabib'){
    console.log('Hallo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka')
}

if (peran === 'Penyihir'){
    console.log('Hallo Penyihir ' + nama + ', Ciptakan keajaiban yang membantu kemenanganmu !')
}

