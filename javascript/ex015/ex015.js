function GerarTabuada() {
    let nr = Number(document.getElementById("nr").value)
    document.getElementById("resultado").innerHTML = 
                ` Tabuada do ${nr} <br> `
    let cont = 1 
    while (cont <= 10) {      
        res = cont * nr
        document.getElementById("resultado").innerHTML +=  
                ` ${nr} x ${cont} = ${res} <br>`
        cont++
    }
}