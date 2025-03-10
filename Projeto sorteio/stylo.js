
const sortearNumero = document.querySelector(".sortear-numero")
const resultadoSorteio = document.querySelector(".input-resultado").value

function numeroSorteado() {


    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)


    if (min < max) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        document.querySelector(".input-resultado").value = result
    }
 
    else {
        alert("O número mínimo deve ser menor que o número máximo")
    }

}

sortearNumero.addEventListener("click", numeroSorteado)





