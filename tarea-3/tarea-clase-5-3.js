document.querySelector('button').onclick = function(){
    let horasTotales = Number(document.querySelector('#horas1').value)
    let minutosTotales = Number(document.querySelector('#minutos1').value)
    let segundosTotales = Number(document.querySelector('#segundos1').value)
    for (let i=2; i<6; i++) {
        horasTotales += Number(document.querySelector(`#horas${i}`).value)
        minutosTotales += Number(document.querySelector(`#minutos${i}`).value)
        segundosTotales += Number(document.querySelector(`#segundos${i}`).value)
    }
    let conversionMinutosEnHoras = minutosTotales / 60
    let conversionSegundosEnHoras = segundosTotales / 3600
    document.querySelector('strong').innerText = `el tiempo total de los videos es de ${(horasTotales + conversionMinutosEnHoras + conversionSegundosEnHoras).toFixed(2)} horas`

    return false
}