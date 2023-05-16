const numeros = []
const size = 30
let impar=[]

for (let i = 0; i < size; i++) {
    if (i % 2 !==0){
        impar.push(i)
    }
  numeros.push(i)

}


console.log(numeros)
console.log(impar)

const lista =[
    'arara',
    'amor',
    'asa',
    'longo',
    'ele',
    'dinossauro',
    'esse',
    'peppa',
    'mamam',
    'tartaruga',
    'bandolin', 
    'matam', 
    'desodorante', 
    'mundo', 
    'metem',
    'terra', 
    'água', 
    'mirim', 
    'fogo', 
    'sopapos']

const ehPalindromo = str => str===str.split('').reverse().join('');
const resultados = lista.map(ehPalindromo);
console.log (resultados);

let soma = 0;
let anterior = 0;
let proximo = 1;
let maximo = 100;

for (let i= 0;  i < maximo; i++){
    soma = anterior + proximo
    anterior = proximo
    proximo = soma

    console.log(proximo)
}

const novosNumeros = [1, 2, 3 ,4 ,5 , 6, 7, 8, 9, 10]
let numerosTotais = novosNumeros.unshift(0)
console.log(novosNumeros)

numerosTotais = novosNumeros.push(11);

console.log(novosNumeros)

numerosTotais = novosNumeros.splice(5,1)

console.log(novosNumeros)

numerosTotais = novosNumeros.splice(7, 1 ,20, 21, 22)

console.log(novosNumeros)



let pessoas =[
	{id: 1, nome: 'Liz', idade: 2},
	{id: 2, nome: 'Thaís', idade: 32},
	{id: 3, nome: 'Jonathan', idade: 30},
	{id: 4, nome: 'Thainá', idade: 29},
	{id: 5, nome: 'Fabiano', idade: 45},
]

var pessoasSEmId = pessoas.map(function(pessoa) {
    return {
      nome: pessoa.nome,
      idade: pessoa.idade
    };
  });

console.log(pessoasSEmId)


pessoas.forEach(pessoa => console.log(`<h3> ${pessoa.id} - ${pessoa.nome}- ${pessoa.idade}</h3>`))

const nomes = {
  jason: "Jason",
    thais: "Thaís",
    liz: "Liz",
    jennei: "Jennei",
    jenyffer: "Jennyfer",
    joao: "João",
    bola: "Bola",
    gato: "Gato",
    jaguar: "Jaguar"
  }
  
  for (let prop in nomes) {
    if (!prop.startsWith('j')) {
      delete nomes[prop];
    }
  }
  
  console.log(nomes);