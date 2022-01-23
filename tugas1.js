function cekPalindrom(kata){
    if(typeof kata != "string"){
        return "kata harus string"
    }

    kata = kata.toLowerCase();
    words = "";

    for(i = kata.length -1; i>= 0; i--){
        words += kata[i]
    }

    if(kata == words){
        return "Palindrom"
    } else {
        return "Bukan Palindrom"
    }
}

console.log(cekPalindrom("MALAM"));
console.log(cekPalindrom("JANGAN"));
console.log(cekPalindrom(1));