// RESOLUÇÃO DOS EXERCÍCIOS:

// EXERCÍCIO 3

let idade = prompt('Informe a sua idade');

if (idade >= 18){
    console.log('Você é maior de idade!')
}
else {
    console.log('Você é menor de idade!')
}


// EXERCÍCIO 4

sexo = "feminino";

switch (sexo) {
    case "feminino":
        console.log('Bem vinda!')
        break;
    default:
        console.log('Bem vindo!')
}


// EXERCÍCIO 5

for (let index = 0; index < 08; index++) {
    console.log("O valor da minha casa é: " + index);    
}

// EXERCÍCIO 6

let tabuada = 0;

while ( tabuada < 11 ) {
    console.log("7 x " + tabuada + "= " + 7*tabuada);
    tabuada++;
}