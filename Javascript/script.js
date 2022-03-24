// let num = parseInt(prompt("Digite num"))
// if (letter == "F" || letter == "f") {
//     console.log(letter + " é feminino");
// }
// else if (letter == "M" || letter == "m") {
//     console.log(letter + " é masculino");
// }
// else {
//     console.log(letter + " é invalido");
// }
let exercicio = parseInt(prompt("Qual o exercício, de 1 a 12, na ordem que está no Discord: "))
if (exercicio == 1) {
    // EstruturaSequencial
    // 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console
    let nome = prompt("Digite seu nome: ");
    alert("Seu nome é " + nome + ".");
    console.log(nome);
}
else if (exercicio == 2) {
    // 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    soma = num1 + num2
    alert("A soma é igual a: " + soma + ".");
}
else if (exercicio == 3) {
    // 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.
    let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
    let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
    media = (nota1 + nota2)/2;
    alert("Sua média foi de: " + media + ".");
}
else if (exercicio == 4) {
    // 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 
    let anonasc = parseInt(prompt("Digite seu ano de nascimento: "));
    idade = 2022 - anonasc;
    alert("Você tem " + idade + " anos.");
}
else if (exercicio == 5) {
    // 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
    let moneyperhour = parseFloat(prompt("Digite quanto você ganha por hora de trabalho: "));
    let hourspermonth = parseFloat(prompt("Digite quantas horas você trabalha por mês: "));
    salario = moneyperhour*hourspermonth;
    alert("Seu salário é de: R$" + salario + ",00.");
}
else if (exercicio == 6) {
    // 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).
    let tempFah = parseFloat(prompt("Digite temperatura em Fahrenheit: "));
    tempCel = (tempFah-32)/1.8;
    alert("Essa temperatura em graus celcius é igual a: " + tempCel + "°C.");
}
else if (exercicio == 7) {
    // EstruturaDeDecisao
    // 1.	Faça um Programa que peça dois números e imprima o maior deles.
    let number1 = parseFloat(prompt("Digite primeiro número: "));
    let number2 = parseFloat(prompt("Digite segundo número: "));
    if (number1 > number2) {
        alert("O primeiro número, " + number1 + ", é maior.");
    }
    else {
        alert("O segundo número, " + number2 + ", é maior.");
    }
}
else if (exercicio == 8) {
    // 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
    let valor = parseFloat(prompt("Digite um número: "));
    if (valor < 0) {
        alert("O número, " + valor + ", é negativo.");
    }
    else if (valor > 0) {
        alert("O número, " + valor + ", é positivo.");
    }
    else {
        alert("O número, " + valor + ", é neutro.");
    }
}
else if (exercicio == 9) {
    // 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
    let sexo = prompt("Digite seu sexo, F ou M: ")
    if (sexo == "F"|| sexo == "f") {
        alert("Seu sexo é feminino.")
    }
    else if (sexo == "M"|| sexo == "m") {
        alert("Seu sexo é masculino.")
    }
    else {
        alert("Sexo inválido.")
    }
}
else if (exercicio == 10) {
    // 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
    // 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    // 2.	A mensagem "Reprovado", se a média for menor do que sete;
    // 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.
    let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
    let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
    media = (nota1 + nota2)/2;
    if (media == 10) {
        alert("Você foi Aprovado com Distinção com média igual a: " + media + ".")
    }
    else if (media >= 7) {
        alert("Você foi Aprovado com média igual a: " + media + ".")
    }
    else {
        alert("Você foi Reprovado com média igual a: " + media + ".");
    }
}
else if (exercicio == 11) {
    // 5.	Faça um Programa que leia três números e mostre o maior e o menor deles.
    let number1 = parseFloat(prompt("Digite primeiro número: "));
    let number2 = parseFloat(prompt("Digite segundo número: "));
    let number3 = parseFloat(prompt("Digite terceiro número: "));
    if (number1 > number2 && number2 > number3) {
        alert("O maior número foi o primeiro, " + number1 + ", e o menor número foi o terceiro, " + number3 + ".");
    }
    else if (number1 > number3 && number3 > number2) {
        alert("O maior número foi o primeiro, " + number1 + ", e o menor número foi o segundo, " + number2 + ".");
    }
    else if (number2 > number1 && number1 > number3) {
        alert("O maior número foi o segundo, " + number2 + ", e o menor número foi o terceiro, " + number3 + ".");
    }
    else if (number2 > number3 && number3 > number1) {
        alert("O maior número foi o segundo, " + number2 + ", e o menor número foi o primeiro, " + number1 + ".");
    }
    else if (number3 > number1 && number1 > number2) {
        alert("O maior número foi o terceiro, " + number3 + ", e o menor número foi o segundo, " + number2 + ".");
    }
    else if (number3 > number2 && number2 > number1) {
        alert("O maior número foi o terceiro, " + number3 + ", e o menor número foi o primeiro, " + number1 + ".");
    }
    else if (number1 > number2 && number2 == number3) {
        alert("O maior número foi o primeiro, " + number1 + ", e o segundo e terceiro empataram");
    }
    else if (number2 > number1 && number1 == number3) {
        alert("O maior número foi o segundo, " + number2 + ", e o primeiro e terceiro empataram");
    }
    else if (number3 > number1 && number1 == number2) {
        alert("O maior número foi o terceiro, " + number3 + ", e o primeiro e segundo empataram");
    }
    else if (number1 == number2 && number1 > number3) {
        alert("O primeiro e segundo empataram e o terceiro, " + number3 + ", é o menor.");
    }
    else if (number1 == number3 && number1 > number2) {
        alert("O primeiro e terceiro empataram e o segundo, " + number2 + ", é o menor.");
    }
    else if (number2 == number3 && number2 > number1) {
        alert("O segundo e terceiro empataram e o primeiro, " + number1 + ", é o menor.");
    }
    else {
        alert("Todos os números são iguais a: " + number1 + ".");

    }
}
else if (exercicio == 12) {
    // 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
    let number1 = parseFloat(prompt("Digite o primeiro número: "));
    let number2 = parseFloat(prompt("Digite o segundo número: "));
    soma = number1 + number2;
    if (soma % 2 == 0) {
        alert("A soma, " + soma + ", é par");
    }
    else {
        alert("A soma, " + soma + ", é ímpar");
    }

}
else {
    alert("Número de exercício inválido.");
}









