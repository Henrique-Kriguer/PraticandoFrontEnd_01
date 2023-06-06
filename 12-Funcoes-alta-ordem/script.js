const list1 = [1,2,3,4];
const list2 = [];
const nomes = ['Henrique','Simone','Francisco','João'];

// MAP - aplica uma função a cada elemrnto da coleção:

function dobro(x){
    return x*2;
}
function triplo(x){
    return x*3;
}

const n1 = list1.map(dobro);
const n2 = list1.map(triplo);
const n3 = list1.map(x => x*5);

console.log(n1);
console.log(n2);
console.log(n3);

// função filter

function par (x){
    return x % 2 == 0;
}

const f1 = list1.filter(par);
const f2 = (list1.filter((x => x % 2 !== 0)));

console.log("Função filter(par)  "+ f1);
console.log("Função filter (impar) " + f2);

function soma(x,y){
    return x + y;
}

const r1 = list1.reduce(soma);
console.log("Função REDUCE(SOMA) " +r1);

const r2 = list2.reduce(soma,0);
console.log("Função REDUCE(SOMA de lista vazia) " +r2);

function ordenarPorTamanho(s1, s2){
    return s1.lenght - s2.lenght;
}
console.log("array original" + nomes);
const s1 = [...nomes].sort(ordenarPorTamanho);
console.log("array de string por ordem de tamanho "+s1);

const s2 = [...nomes].sort();
console.log("Array de string ordenado alfabeticamente  "+s2);

