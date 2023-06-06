
const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

const{id, client} = obj;
console.log(id);
console.log (client);

function subtotal(item){
    return item.price * item.quantity;
}

console.log(subtotal(obj.items[1]));

function total ({items}){
    let soma = 0;
    for (let i=0; i < items.length; i++){
        soma = soma + subtotal(items[i]);
    }
return soma;    
}
console.log("total: "+total(obj));

console.log("----- Desestruturando o objeto em partes menores ----- ");
const [item1, item2] = obj.items;
console.log("primeiro item do pedido: ");
console.log(item1);

