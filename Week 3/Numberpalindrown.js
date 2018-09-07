function angkaPalindrome(num) {
    
    var numBalik = "";
    var i = true;
    var result;
    
    while (i) {
        num++;
        
        if (num < 9) {
            i = false
            result = num;
        }
        
        numBalik = num.toString().split('').reverse().join('')
        if (String(num) === numBalik) {
            i = false;
            result = num;
        }

    }

    return result

}




console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000)); 