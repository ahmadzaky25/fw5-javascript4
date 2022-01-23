function divideAndSort(angka) {
    
    if(typeof angka != "number"){
        console.log("Inputan harus berupa integer"); 
    } else {
        const strAngka = angka.toString().split('0') //
        // console.log(strAngka);

        const data = strAngka.map( x => {

            let splitNum = x.split('')
            splitNum = splitNum.sort()

            let res = splitNum.join('')
    
            return res

        })

        console.log(data.join(''));
        
    }
}

divideAndSort(5956560159466056)