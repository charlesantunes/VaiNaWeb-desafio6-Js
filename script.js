// Crie um objeto que receba ao menos três propriedades sobre você.
const dadosPessoais = {
    nome: "Charles",
    sobreNome: "Antunes",
    formação: "Superior",
    Curso: "Sistemas de Informação"
};
console.log(dadosPessoais);

// Adicione uma nova propriedade sem alterar seu objeto inicial.
dadosPessoais.escola = "Vai Na Web";
console.log(dadosPessoais);

// Remova uma propriedade desse objeto.
delete dadosPessoais.sobreNome;
console.log(dadosPessoais);

//Mostre no console todas as propriedades desse objeto.
console.log(dadosPessoais);

// Crie um array chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
    nome: "Bolsonaro",
    idade: 67,
    telefone: "91 66600-0000",
    amigos: ["William Bonner","Lula","Rodrigo Maia", "Sergio Moro"]
},{
    nome: "Lula",
    idade: 76,
    telefone: "21 666-1313-2424",
    amigos: ["Bolsonaro", "Sergio Moro","Carlos Bolsonaro","Irmãos metralhas"]
},{
    nome: "Dória",
    idade: 64,
    telefone: "31 92424-0007",
    amigos: ["Márcio França", "Eduardo Leite","Haddad","Bolsonaro"]
},{
    nome: "Ciro Gomes",
    idade: 64,
    telefone: "85 95555-5555",
    amigos: ["Bolsonaro", "Eduardo Leite","Patrícia Pillar","Patrícia Saboya"]
},{
    nome: "Sergio Moro",
    idade: 49,
    telefone: "31 92424-0007",
    amigos: ["Lula", "Bolsonaro","Carlos Bolsonaro","Eduardo Bolsonaro"]
}];
console.table(cadastro);

// Mostre no console o nome de um amigo de cada lista.
console.log(`O melhor amigo de ${cadastro[0].nome} é ${cadastro[0].amigos[1]}`);
console.log(`O melhor amigo de ${cadastro[1].nome} é ${cadastro[1].amigos[1]}`);
console.log(`O melhor amigo de ${cadastro[2].nome} é ${cadastro[2].amigos[3]}`);
console.log(`O melhor amigo de ${cadastro[3].nome} é ${cadastro[3].amigos[2]}`);
console.log(`O melhor amigo de ${cadastro[4].nome} é ${cadastro[4].amigos[0]}`);

//outra forma de resposta.
for (let i = 0; i < cadastro.length; i++) {
        let j = Math.floor(Math.random()*4
        ); 
        console.log(`O melhor amigo de ${cadastro[i].nome} é ${cadastro[i].amigos[j]}`); 
}

















