//Adicionando e alterando valores

let Tenis = {
    tamanho: 45,
    estoque: true,
};

Tenis.tamanho = 42;
Tenis.estoque = false;
//Tenis.preco = "R$ 45"
Tenis["preco"] = "R$ 45"

console.log(Tenis);
console.log(Tenis["preco"]);