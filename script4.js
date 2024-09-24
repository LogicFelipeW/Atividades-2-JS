let fatorial = 1
let num = prompt('Digite um número inteiro: ')

if (num < 0) {
    alert('Não é permitido para números negativos!');
} else{
    let i = 1
   
    while (i <= num) {
        fatorial = fatorial * i
        i++
    }
    alert('O fatorial é: ' + fatorial)
}
