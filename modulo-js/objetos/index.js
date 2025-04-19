let pessoa = {
    nome: "Mario",
    idade: 31,
    genero: "Masculino",
    eFumante: false,
    habilidades: ["HTML", "CSS", "Javascript"],
    andar: () => {
        console.log("Andei com arrow function!");        
    }
}
// função normal
let subtrair = function (){
    console.log("subtraiu")
}

// Arrow function 
let multiplicar = (a, b) => {
    return a*b;
    
}

// função anonima, armazenada em uma variavel, onde a variavel se torna o nome da função
dividir = function(a, b){
    return a / b
}