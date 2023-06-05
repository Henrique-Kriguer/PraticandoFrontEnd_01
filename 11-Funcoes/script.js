function soma(n1,n2){
    return n1+n2;
}

const sub1 = function(num1, num2){
    return num1 - num2;
}

const mult2 = (num1,num2) =>{
    return num1*num2;
}

const calc3 =(num1,num2)=>num1/num2;

const dobro = num => num*2

// função que não tem retorno, por padrão tem como retorno undefined

function mostrarPreco(preco){
    console.log("o preço é = "+preco);
}

// Variáveis definidas dentro da função não vazam o escopo

function area(raio){
    const pi = 3.1415;
    return pi*raio*raio;
}



// function hoisting

T(10);
function T(num){
 console.log("Função T = "+num+5);

}
function triplo(num){
    return num*3;
}

function aplicar(f, num){
    const result = f(num);
    console.log("Resultado = "+result);
}
aplicar(triplo,20);