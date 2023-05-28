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

// Exercício 7

let index = 0;

do {
    console.log("baixando seu arquivo... tentativa: ", index);
    index++;
} while (index <= 10);

// Exercício 8

var time = 3;
     for(var i = 0; i < time; i++){
         setInterval(() => {
             console.log("Hello World.")
         }, 3000);
     }


// Exercício 9

console.log("Espere cinco segundos para a descobrir!");
 const timeOut = setTimeout(Mensagem, 5000);
 function Mensagem(){
     console.log("Obrigado por ficar esperando.");
 }

 // Exercicio 10

 var clique = document.querySelector('button').addEventListener('click',MudarBackground);
  function MudarBackground(){
      var body = document.querySelector('body');
      body.style.background = 'blue';
 }