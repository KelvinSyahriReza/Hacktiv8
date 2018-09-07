function xo(str) {
    
    var countX = str.split('o');
    var countO = str.split('x');
    var nX = countX.length
    var nO = countO.length
    if (nX === nO) {
        return true
    } else {
        return false
    }
}


console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true  