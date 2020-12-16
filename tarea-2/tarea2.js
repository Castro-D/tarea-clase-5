document.querySelector('button').onclick = function(){
    const primerNombre = document.querySelector('#primer-nombre').value
    const segundoNombre = document.querySelector('#segundo-nombre').value
    const apellido = document.querySelector('#apellido').value
    const edad = document.querySelector('#edad').value
    const info = `Your name is ${primerNombre} ${segundoNombre} ${apellido}, and you are ${edad}`

    document.querySelector('p').innerText = info
    document.querySelector('h1').innerText = `Bienvenido, ${primerNombre} ${segundoNombre} ${apellido}`

}