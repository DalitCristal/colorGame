/* VARIABLES */

let numberOfSquares = 6 //Numero de la funcion generateRandomColors
let colors = generateRandomColors(numberOfSquares) //Colores de los cuadrados dentro del arreglo
let cuadrados = document.querySelectorAll('.square') //Seleccionamos todos los cuadrados
let h1 = document.querySelector('h1')
let span = document.querySelector('#message') //Span donde ira el color ganador 
let pickedColor = pickColor(colors) //Se le asigna un color ESPECIFICO aleatorio  del arreglo de colores
// span.textContent = pickedColor //Se le agrega al span el color ganador 

let message = document.querySelector('#message') //Nos mostrara Correcto o vuelve a intentarlo 
let reset = document.querySelector('#reset') //Seleccionamos el boton Nuevos colores play again
let facil = document.querySelector('#easyButton')
let dificil = document.querySelector('#hardButton')
let colorDisplay = document.querySelector('#colorDisplay')
colorDisplay.textContent = pickedColor

/* LOOP */
let cuadrado = document.querySelectorAll(".square")   
for(let i= 0; i < cuadrado.length; i++){
    cuadrado[i].style.backgroundColor = colors[i] //Le estoy dando colores a los cuadrados dentro del arreglo

    //logica del juego que pasa si gana o no 
    cuadrados[i].addEventListener ('click', function () {
    let clickedColor = cuadrados[i].style.backgroundColor = colors[i] 

      if (clickedColor === pickedColor) {
        h1.style.backgroundColor = pickedColor
        message.textContent = '¡Correct!'
        changeColors (pickedColor)
        reset.textContent = 'Play again?'
      } else {
        cuadrados[i].style.backgroundColor = '#381D2A'
        message.textContent = 'Intentanlo nuevamente'
      }
    })

}

 /* FUNCIONES */
 
function  changeColors(color) {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = color
    }
}

function pickColor(colors) {
    return colors[parseInt(Math.random()*(colors.length))]
} //Buscamos dentro del arreglo un color aleatorio que sera usado en pickedcolor para poner el color ganador 

function randomColor() {
    let red = parseInt(Math.random()*255)
    let green = parseInt(Math.random()*255)
    let blue = parseInt(Math.random()*255)

    let rgb = `rgb(${red}, ${green}, ${blue})`
    return rgb
} //Se crearan nuevos colores aleatorios RGB

function generateRandomColors(numero) {
    let newColors = []
    for (let i = 0; i < numero; i++) {
        newColors[i] = randomColor()
    }
    return newColors
} //Genera de forma aleatoria el arreglo con los nuevos RGB provenientes del rendomcolor

/* RESET */
reset.addEventListener ('click', function () {
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor(colors)
    // span = document.querySelector('#colorDisplay')
    colorDisplay.textContent = pickedColor
    this.textContent = 'Nuevos Colores'
    message.textContent = ''
    h1.style.backgroundColor = ''
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i]
    }
})

/* EASY (FACIL)*/
 
facil.addEventListener ('click', function () {
    facil.classList.add('selected')
    dificil.classList.remove('selected')

    numberOfSquares = 3
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor(colors)
    // span.textContent = pickedColor
    h1.style.backgroundColor = ''

    colorDisplay.textContent = pickedColor

    cuadrados.forEach((el, i) => {
        if(colors[i]){
            el.style.display = "block";
            el.style.backgroundColor = colors[i];
        }else{
            el.style.display = "none";
        }
    });

    // for (let i = 0; i < colors.length; i++) { 

    //     cuadrados[i].style.backgroundColor = colors[i]

    // }

    // for (let i = 0; i < cuadrados.length; i++) {
    //     cuadrados[i].style.backgroundColor = colors[i]
    // }
})

/* HARD (DIFICIL) */
 
dificil.addEventListener ('click', function () {
    facil.classList.remove('selected')
    dificil.classList.add('selected')

    numberOfSquares = 6
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor(colors)
    // span.textContent = pickedColor
    h1.style.backgroundColor = ''

    colorDisplay.textContent = pickedColor

    cuadrados.forEach((el, i) => {
        if(colors[i]){
            el.style.display = "block";
            el.style.backgroundColor = colors[i];
        }else{
            el.style.display = "none";
        }
    });
    // for (let i = 0; i < cuadrados.length; i++) {
    //     cuadrados[i].style.backgroundColor = colors[i]
    //     cuadrados[i].style.display = 'block'
    // }
})
