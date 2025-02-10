var nota1 = 6
var nota2 = 9
var nota3 = 2

var media = (nota1 + nota2 + nota3 ) / 3

if (media >=7){
    console.log('Nota 1: ' + nota1)
    console.log('Nota 2: ' + nota2)
    console.log('Nota 3: ' + nota3)
    console.log('Media:' + media)
    console.log('Você foi Aprovado')
}else{
    console.log('Nota 1: ' + nota1)
    console.log('Nota 2: ' + nota2)
    console.log('Nota 3: ' + nota3)
    console.log('Media:' + media)
    console.log('Você foi Reprovado')
}

while (media < 7) {
    console.log('Nota 1: ' + nota1);
    console.log('Nota 2: ' + nota2);
    console.log('Nota 3: ' + nota3);
    console.log('Média: ' + media);
    console.log('Você foi Reprovado');
    console.log('Acresentando mais 1 em sua primeira nota...');

    nota1 += 1; 

    media = (nota1 + nota2 + nota3) / 3;
}

console.log('Nota 1: ' + nota1);
console.log('Nota 2: ' + nota2);
console.log('Nota 3: ' + nota3);
console.log('Média: ' + media);
console.log('Você foi Aprovado');

