//Destructuring

const Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 123456,
  n: 5,
  link: { a: "a é = a", b: { c: "C é = c" } },
};

/*const {tamanho, estoque, marcas = "Não possui marca alguma!"} = Tenis;
console.log(tamanho, estoque, marcas);

const {secret: randomNumber, n: notas} = Tenis;
console.log(randomNumber);
console.log(notas);*/

const {
    link : {
        a,
        b : {c}}
} = Tenis;
console.log(a,c);