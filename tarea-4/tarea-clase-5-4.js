let lista = []
for (let i=1; i<6;i++) {
    number = Number(document.querySelector(`#numero-${i}`).innerText)
    lista.push(number)
    
}
let suma = 0;
for (let i=0; i<lista.length;i++) {
    suma += lista[i];
}
let promedio = suma / lista.length;
let maximo = Math.max(...lista);
let minimo = Math.min(...lista);


function encontrarNumeroRepetido(lista) {
    let numero;
    let repeticiones = 1;
    let numerosUnicos = [];

    for (let i=0;i<lista.length;i++) {
        let comparador = 1;
        if (numerosUnicos.includes(lista[i])) {
            continue
        }
        for (let j=i+1;j<lista.length;j++) {
            if (lista[j] === lista[i]) {
                comparador += 1 
            }
        }if(comparador > repeticiones){
            numero = lista[i]
            repeticiones = comparador
        }
        numerosUnicos.push(lista[i])
    }
    if (typeof numero == 'undefined'){
        return "no hay repetidos"
    }
    else{
        return numero
    }
    
}

document.querySelector('#promedio').innerText = `el promedio es de ${promedio}`;
document.querySelector('#minimo').innerText = `el numero minimo es ${minimo}`
document.querySelector('#maximo').innerText = `el numero maximo es ${maximo}`
document.querySelector('#frecuente').innerText = `el numero mas frecuente es ${encontrarNumeroRepetido(lista)}`
