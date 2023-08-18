function calcular() {
    var val = window.document.getElementById('val')
    var res1 = window.document.getElementById('res1')
    var v = Number(val.value)
    var quantgas = v/5
    res1.innerHTML = (`Você pode abastecer: ${quantgas}L`)
}

