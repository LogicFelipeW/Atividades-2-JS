let continuar = true
let alturaMaisJovem = 0
let pesoMaisVelho = 0
let idadeMaisJovem = Infinity
let idadeMaisVelho = -Infinity
let somaIdades = 0
let totalPessoas = 0

while (continuar) {

    let idade = prompt('Digite a idade:') * 1
    let altura = prompt('Digite a altura (em metros):') * 1
    let peso = prompt('Digite o peso (em kg):') * 1
    
   
    somaIdades += idade
    totalPessoas++
    
    if (idade < idadeMaisJovem) {
        idadeMaisJovem = idade
        alturaMaisJovem = altura 
    }

    
    if (idade > idadeMaisVelho) {
        idadeMaisVelho = idade
        pesoMaisVelho = peso
    }

   
    continuar = confirm('Deseja inserir dados de outra pessoa? (OK para Sim, Cancelar para Não)')
}

let mediaIdades = somaIdades / totalPessoas


alert('Altura da pessoa mais jovem: ' + alturaMaisJovem)
alert('Peso da pessoa mais velha: ' + pesoMaisVelho )
alert('Média de idades: ' + mediaIdades.toFixed(2))
