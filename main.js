function verificar() {
    let inicio = document.getElementById('txtIni')
    let fin = document.getElementById('txtFin')
    let salto = document.getElementById('txtSal')
    let resp = document.getElementById('resp')

    if (inicio.value.length == 0 || fin.value.length == 0 || salto.value.length == 0) {
        resp.innerHTML = "Imposible Contar!"
    } else {
        resp.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value)
        let f = Number(fin.value)
        let p = Number(salto.value)

        if (p <= 0) {
            alert('Salto Invalido, verifique !!')
        }

        if (i < f) {
            // Contador Cresciente
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += `${c} &#128073;&#127995`
            }
        } else {
            // Contador Decrescente
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += `${c} &#128073;&#127995`
            }
        }

        resp.innerHTML += `&#x1F3F4`
    }

}

function borrar() {
    document.getElementById('txtIni').value = ""
    document.getElementById('txtFin').value = ""
    document.getElementById('txtSal').value = ""
    document.getElementById('resp').innerHTML = 'Esperando contar...'
}