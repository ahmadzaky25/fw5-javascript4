const reverseWords = (kalimat) => {
    const kata = kalimat.split(" ") // [saya, belajar,javascript]
    const revKata = kata.reverse() // [javascript,belajar,saya]

    return revKata.join(" ")
}

console.log(reverseWords("Saya Belajar Javascript"));