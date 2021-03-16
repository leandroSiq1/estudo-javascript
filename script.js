function aulaSplice() {
  const arraySplice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // primeiro parametro do splice voce indica a partir de que index do array
  // voce quer remover um item, e o segundo parametro voce indicar quantos intem voce quer 
  // remover do array...
  arraySplice.splice(2, 4);

  // console.log(arraySplice);
}

aulaSplice();

// Sobre Filter!
  
{
  const clientes = [
    { name: "Fulano", lastName: "Da Silva", age: 14 },
    { name: "Santos", lastName: "Henrique", age: 12 },
    { name: "Moreira", lastName: "Siqueira", age: 13 },
    { name: "Ciclano", lastName: "Santos", age: 18 },
    { name: "Beltrano", lastName: "Moreira", age: 20 },
  ];

  const clientesMaiores = clientes.filter((client) => {
    // return client.name === "Santos";
    return client.age >= 18;
  });
  // console.log(clientesMaiores);
}
  
{
  function novoAluno(nome, idade) {
    return { nome, idade }
  }

  const alunos = [
    novoAluno("Leandro", 19),
    novoAluno("Bruno", 24),
    novoAluno("Edemir", 30),
    novoAluno("Maria", 45)
  ];

  // for(let aluno of alunos) {
  //   if (aluno.idade < 30) {
  //     console.log(aluno);
  //   }
  // }

  // console.log(alunos.filter((aluno) => {
  //   return aluno.idade < 30;
  // }));
  
  function temMenosDeTrinta(aluno) {
    return aluno.idade < 30;
  }

  function temMaisDeTrinta(aluno) {
    return aluno.idade >= 30;
  }

  function filtro(callback) {
    const alunosFiltrados = [];

    for (let aluno of alunos) {
      if (callback(aluno)) {
        alunosFiltrados.push(aluno);
      }
    } 

    return alunosFiltrados;
  }

  // console.log(filtro(temMenosDeTrinta));
  // console.log(filtro(temMaisDeTrinta));

  // const alunosMenosDeTrinta = alunos.filter(temMaisDeTrinta);
  // console.log(alunosMenosDeTrinta);
}

{
  const produtos = [
    { name: "Notebook", preco: 2499, fragil: true },
    { name: "iPad Pro", preco: 4199, fragil: true },
    { name: "Copo de Vidro", preco: 12.49, fragil: true },
    { name: "Copo de Plástico", preco: 18.99, fragil: false },
  ];

  // produtos fragil & produtos com preço maiores que R$500,00

  function validate(product) {
    let status = false;
    if (product.preco > 500 && product.fragil) {
      return status = true;
    }    

    return status;
  }

  // console.log(produtos.filter((validate)));
}

// ========================================================= // ===============================

// sobre Map!
{
  // map t medeiro

  const clientesMap = [
    { name: "Fulano", lastName: "Da Silva", age: 14 },
    { name: "Santos", lastName: "Henrique", age: 12 },
    { name: "Moreira", lastName: "Siqueira", age: 13 }
  ];

  const clientesFinal = [];

  clientesMap.forEach((cliente) => {
    clientesFinal.push(cliente.name + ' ' + cliente.lastName);
  });

  // o metodo Map, te retorna um novo array

  const clientesFinalMap = clientesMap.map((cliente) => {
    
    return { "name": `${cliente.name} ${cliente.lastName}` };
  });
}

// ========================================================= // ===============================


// sobre Reduce!
{ 

  // é obrigatorio passar sempre um acc(acumulator), e um cur(current)
  // o acumulator é o seu novo "item", e o current é sempre o item atual 
  // do que esta sendo percorrido, e sempre precisa retornar o acumulator

  const agents = [
    { name: "Leandro", score: 98 },
    { name: "Sandra", score: 80 },
    { name: "Gustavo", score: 34 },
    { name: "João", score: 38 },
    { name: "Ana Clara", score: 50 },
  ]

  const agentsFinal = agents.reduce((acc, cur) => {

    if (cur.score >= 50) {
      acc.pass.push(cur);
    } else {
      acc.fail.push(cur);
    }

    return acc;
  }, {
    pass: [],
    fail: []
  });

  // console.log(agentsFinal);

}

// ========================================================= // ===============================


// Sobre JSON
{

  // t medeiro

  const objeto = {
    name: "fulano",
    idade: 23
  }
  
  const json = JSON.stringify(objeto);
  
  const jsonParse = JSON.parse(json);
  
  // console.log(jsonParse);
}

// Sobre localStorage
{

  const tarefas = [
    { tarefa: 'Estudar Js'},
    { tarefa: 'Estudar node.js'},
    { tarefa: 'Estudar react.js'},
  ]

  const tarefasJson = JSON.stringify(tarefas);
  localStorage.setItem('item1', tarefasJson);

  const teste = localStorage.getItem('item1');
  JSON.parse(teste);
}

// Sincrono e Assincrono

function primary() {
  console.log("Primary");
}

function secound() {
  console.log("Second");
}

setTimeout(primary, 2000); // Assincrono

secound();