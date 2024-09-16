//insira uma string e mostre qual a menor palavra 
var frase ='O Rato roeu a roupa do rei'
var separar=frase.split(" ")//separando as palavras por espaço
var lista=[]

for(c=0;c<separar.length;c++){
    console.log(separar[c])
    var contador=separar[c].length // Pegando o tamanho de cada palavra
    lista.push(contador)//Lista para pegar o tamanho de cada palavra e aramzenando
    console.log('**')
}    
    console.log('Menor palavra')
    var min = Math.min.apply(null, lista); // encontrando a menor palavra
    var localizar =lista.indexOf(min) //localização da menor palavra

console.log('A menor palavra tem '+ min + ' letra(s)')
console.log('A localização da menor palavra é na posição ' + localizar +'!')
console.log('E ela é a -- ' + separar[localizar] + ' --') //Qual a menor palavra