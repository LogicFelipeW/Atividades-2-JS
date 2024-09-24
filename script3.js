let somatorio = 0
let num

do{
    num = parseFloat(prompt('Digite um número (ou 0 para encerrar):'))

    if(num > 0){
        somatorio = somatorio + num
    }
}while(num !== 0)

alert('O somatório desses números é: ' + somatorio)
