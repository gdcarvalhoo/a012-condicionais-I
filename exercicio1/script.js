// # Exercício 1

// Crie um código que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, imprima no console a mensagem: "o número é par".


const num = 5

if(num%2 === 0){
    console.log("O número é par");
}
else if (num%2 === 1){
   console.log("O número é Impar");
}
else {
    console.log("Digite um número !")
}