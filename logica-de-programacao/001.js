/*
let pratoDoDia = "Lasanha"
let precoPratoDoDia = 24.90
let frete = 13.89
let cliente = "Edu"

console.log(`O total do pedido do ${cliente} foi de ${precoPratoDoDia+frete}`)
*/

let diaDaSemana = 2

switch (diaDaSemana) {
    case 1:
        console.log("Entrou no case 1")
        preco = 10
        break;

    case 2:
        preco = 20
        break;

    case 3:
        preco = 30
        break;

    default:
        preco = 0
        break;
}

console.log(preco)