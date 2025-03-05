/*
    slice = pega os dados dentro de um range sem quebrar o Array
    splice = remove os dados do Array dentro de um range
*/

let arr = [
    { nome: "Dener", tel: "(99) 99999-99999"},
    { nome: "zé", tel: "(99) 99999-99999"},
    { nome: "camargo", tel: "(99) 99999-99999"},
    { nome: "paulo", tel: "(99) 99999-99999"},
    { nome: "felipe", tel: "(99) 99999-99999"},
    { nome: "claudia", tel: "(99) 99999-99999"},
];

console.table(arr);

console.log(arr.splice(4, 1));

// const newArray = arr.slice(0,3)
// console.table(newArray);

console.table(arr);