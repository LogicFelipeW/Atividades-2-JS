let fatorial = 1
let num = prompt('Digite um número (não pode ser negativo): ')

if (num < 0) {
    alert('Não é permitido números negativos!');
} else{
   
   
    for( let i = 1;i <= num; i++) {
        fatorial = fatorial * i
        
    }
    alert('O fatorial é: ' + fatorial)
}
