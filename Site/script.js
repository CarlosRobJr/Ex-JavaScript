function calcular() {
    var val = window.document.getElementById('val')
    var res1 = window.document.getElementById('res1')
    var res2 = window.document.getElementById('res2')
    var v = Number(val.value)
    var quantgas = v/5
    var autcarro = quantgas * 20
    res1.innerHTML = (`Você pode abastecer: ${quantgas}L`)
    res2.innerHTML = (`Autonomia do veículo: ${autcarro}Km/L`)
}

