function palindrome(kata) {

    var terbalik = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        terbalik += kata[i] ;

    }
    if (kata === terbalik) {
        return true;
    } else
        return false;

}

console.log(palindrome('katak')); 
console.log(palindrome('blanket')); 
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak')); 
console.log(palindrome('mister')); 