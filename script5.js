let continuar = true
let menoridade = 200
let alturajovem = 0
let maioridade = 0
let maiorpeso= 0
let total = 0
let idades = 0

while(continuar){

    let altura = parseFloat(prompt('Digite a altura da pessoa: '))
    let peso = parseFloat(prompt('Digite o peso da pessoa: '))
    let idade = parseFloat(prompt('Digite a idade da pessoa'))

    idades += idade
    
    total++

    if(menoridade > idade){
        menoridade = idade
        alturajovem = altura
    }
    
    if(maioridade < idade){
        maioridade = idade
        maiorpeso = peso

    }
    

    continuar = confirm('Deseja cadastrar outra pessoa? (0 para cancelar)')
    
}

    let mediaIdades = idades / total
    alert (` A altura da pessoa mais jovem é : ${alturajovem}`)
    alert (` O peso da pessoa mais velha é : ${maiorpeso}`)
    alert (` A média da idade das pessoas é : ${mediaIdades}`)


