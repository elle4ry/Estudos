//Oque é um Objeto

let Tenis = {
    tipo: "tenis de corrida",
    cardaco: "G",
    estoque: false,
    tamanho :{
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10,
        },
    },
    marcaArrayValores: ["Nike", "Adidas"],
    marcaArrayObj:[
        {
            nome: "Nike"
        },
        {
            nome: "Adidas"
        },
        {
            nome: "Etc"
        },
    ],
    getMarcaArrayObj: function(param){
        return this.marcaArrayObj[param].nome;
    },
    getMarcaArrayValores: function(param){
        return this.marcaArrayObj[param];
    },
};

console.log(Tenis)
console.log(Tenis.tipo)
console.log(Tenis.tamanho)