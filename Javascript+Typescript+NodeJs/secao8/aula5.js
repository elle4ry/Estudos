//Verificação de existência de propriedade e valor

const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: {a: "a é = a", b: {c: "c é = c"}},
};

//console.log(Tenis.hasOwnProperty("tamanho"));

/*if (Tenis.hasOwnProperty("tamanho")) {
    console.log("Existe tamanho")
}else{
    console.log("Não existe tamanho")
}*/
console.log(Tenis.hasOwnProperty("tamanho"));
console.log("tamanho" in Tenis);